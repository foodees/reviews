import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import ReviewSearch from './components/ReviewSearch.jsx';
import ReviewList from './components/ReviewList.jsx';
import reviewDummyData from './reviewDummyData.js';
import userDummyData from './userDummyData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // iterator: window.location.href.split("/").pop().substring(4) || '1',
      restaurant: '--9e1ONYQuAa-CB_Rrw7Tw',
      reviews: reviewDummyData,
      users: userDummyData,
      sortBy: 'newestFirst'
    }
  }

  //TODO: Add restaurant name column to foodee_reviews table
  // dummy data: // SELECT * FROM foodee_reviews WHERE business_id = '--9e1ONYQuAa-CB_Rrw7Tw' ORDER BY date DESC OFFSET 0 ROWS FETCH NEXT 10 ROWS ONLY

  componentDidMount() {
    // axios.get()
  }

  changeSort(option) {
    this.setState({
      sortBy: option
    });
  }

  render () {
    return (
    <div id="reviews">
      <h2>Recommended Reviews for [input restaurant name here]</h2>
      <ReviewSearch />
      <ReviewList reviews={this.state.reviews} users={this.state.users}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
