import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import ReviewSearch from './components/ReviewSearch.jsx';
import ReviewList from './components/ReviewList.jsx';
import ReactPaginate from 'react-paginate';
//import reviewDummyData from './reviewDummyData.js';
//import userDummyData from './userDummyData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // iterator: window.location.href.split("/").pop().substring(4) || '1',
      restaurantId: window.location.href.split('/')[4],
      page: 1,
      numPages: 1,
      reviews: [],
      users: [],
      sortBy: 'newestFirst'
    };
  }

  //TODO: Add restaurant name column to foodee_reviews table
  // dummy data: // SELECT * FROM foodee_reviews WHERE business_id = '--9e1ONYQuAa-CB_Rrw7Tw' ORDER BY date DESC OFFSET 0 ROWS FETCH NEXT 10 ROWS ONLY

  componentDidMount() {
    axios.get(`http://localhost:3004/biz/${this.state.restaurantId}/reviews/count`,
      {
        params: {
          id: this.state.restaurantId
        }
      })
        .then((response) => {
          console.log('CLIENT GET REVIEW COUNT SUCCESS: ', response);
          this.setState({
            numPages: Math.ceil(response.data[0].count / 10)
          });
        })
          .catch((err) => {
            console.log('CLIENT GET ERROR: ', err);
          });

    this.getReviews(this.state.restaurantId, this.state.page);
  }

  getReviews(id, page, sortOrder = '/desc') {
    axios.get(`http://localhost:3004/biz/${id}/reviews${sortOrder}`,
      {
        params: {
          id: id,
          page: page
        }
      })
        .then((response) => {
          console.log('CLIENT GET SUCCESS: ', response);
          // console.log('what is this: ', this);
          this.setState({
            reviews: response.data.reviews,
            users: response.data.users
          });
        })
          .catch((err) => {
            console.log('CLIENT GET ERROR: ', err);
          });
  }

  changeSort() {
    this.setState({
      sortBy: $('#sortBy').val()
    }, () => {
      if (this.state.sortBy === 'newestFirst') {
        this.getReviews(this.state.restaurantId, this.state.page, '/desc');
      } else if (this.state.sortBy === 'oldestFirst') {
        this.getReviews(this.state.restaurantId, this.state.page, '/asc');
      } else if (this.state.sortBy === 'highestRated') {
        this.getReviews(this.state.restaurantId, this.state.page, '/ratingdesc');
      } else if (this.state.sortBy === 'lowestRated') {
        this.getReviews(this.state.restaurantId, this.state.page, '/ratingasc');
      }
    });
  }

  render () {
    //var reviewsArr = JSON.parse(JSON.stringify(this.state.reviews));
    //implement sorting of reviews by date / rating
      // new db query for each sort zzzz

    return (
    <div id="reviews">
      <h2>Recommended Reviews for [input restaurant name here]</h2>
      <ReviewSearch sort={this.changeSort.bind(this)} />
      <ReviewList reviews={this.state.reviews} users={this.state.users}/>
      <ReactPaginate
        className="pagination"
        pageCount={this.state.numPages}
        pageRangeDisplayed={3}
        forcePage={0}
        marginPagesDisplayed={1}
        previousLabel={"< Prev"}
        nextLabel={"Next >"}
        previousClassName={"pages"}
        nextClassName={"pages"}
        pageClassName={"pages"}
        activeClassName={"selectedPage"}
        onPageChange={(page) => {
            console.log('page: ', page.selected + 1);
            if (this.state.sortBy === 'newestFirst') {
              //console.log('yoo');
              this.setState({
                page: page.selected + 1
              }, () => {
                this.getReviews(this.state.restaurantId, this.state.page, '/desc');
              });
            } else if (this.state.sortBy === 'oldestFirst') {
              this.setState({
                page: page.selected + 1
              }, () => {
                this.getReviews(this.state.restaurantId, this.state.page, '/asc');
              });
            } else if (this.state.sortBy === 'highestRated') {
              this.setState({
                page: page.selected + 1
              }, () => {
                this.getReviews(this.state.restaurantId, this.state.page, '/ratingdesc');
              });
            } else if (this.state.sortBy === 'lowestRated') {
              this.setState({
                page: page.selected + 1
              }, () => {
                this.getReviews(this.state.restaurantId, this.state.page, '/ratingasc');
              });
            }
          }
        }/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
