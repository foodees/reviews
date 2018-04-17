import React from 'react';

//TODO: Implement search through reviews

class ReviewSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
  }

  onChange(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  // render() {
  //   return(
  //     <input value={this.state.terms} onChange={this.onChange.bind(this)}/>
  //     <button onClick={this.search.bind(this)}> Add Repos </button>
  //   );
  // }
  render() {
    return(
      <div id="reviews-search">
        <span id="reviews-search-bar">
          <input type="text"/>
          <button> Search Comments </button>
        </span>
        <span id="reviews-sort"> Sort By:
          <select id="sortBy">
            <option value="newestFirst" defaultValue>Newest First</option>
            <option value="oldestFirst">Oldest First</option>
            <option value="highestRated">Highest Rated</option>
            <option value="lowestRated">Lowest Rated</option>
            <option value="elites">Elites</option>
          </select>
        </span>
      </div>
    );
  }
}

//"^4.5.0"
//"^2.2.1"

export default ReviewSearch;
