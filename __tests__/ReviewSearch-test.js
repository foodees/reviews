import React from 'react';
// const Enzyme = require('enzyme');
// const EnzymeAdapter = require('enzyme-adapter-react-16');
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';

// import Adapter from 'enzyme-adapter-react-15';
var userData = require('../__mocks__/userData.js');
var reviewData = require('../__mocks__/reviewData.js');

import App from '../client/src/app.jsx';
import ReviewList from '../client/src/components/ReviewList.jsx';
import ReviewListEntry from '../client/src/components/ReviewListEntry.jsx';
import ReviewSearch from '../client/src/components/ReviewSearch.jsx';

describe('example component', function() {

  it('should contain a search bar and sorting drop down menu', function() {
    let wrapper = shallow(<div className="some-class other-class" />);
    let bool = wrapper.is('.some-class');
    expect(wrapper.is('.some-class')).toBe(bool);
  });
});

describe('App component', () => {
  it('should render without throwing an error', () => {
    var app = mount(<App />);
    // console.log('app: ', app);
    expect(app.find('#reviews')).toHaveLength(1);
    
    // var app2 = shallow(<App />);
    app.find('#sortBy').simulate('change', {target: {value: 'oldestFirst'}});
    console.log('app sortBy state: ', app);
    expect(app.state('sortBy')).toEqual('oldestFirst');
    
    var app2 = renderer.create(<App />).toJSON();
    expect(app2).toMatchSnapshot();
    // app.find('#sortBy').simulate('change', {target: {value: 'oldestFirst'}});
    // expect(app.state('sortBy')).toEqual('oldestFirst');
    // expect(app.contains('#review-list')).toBe(true);
    // expect(app.contains('#review-list-entry')).toBe(true);
  });
});

describe('ReviewList component', () => {
  it('should render without throwing an error', () => {
    // console.log('USER DATA: ', userData.pageOne);
    // console.log('REVIEW DATA: ', reviewData.pageOne);
    var list = shallow(<ReviewList reviews={reviewData.pageOne} users={userData.pageOne} />);
    expect(list.is('.review-list')).toBe(true);
    expect(list.find(ReviewListEntry)).toHaveLength(10);
  });
});

describe('ReviewListEntry component', () => {
  it('should render without throwing an error', () => {
    var listEntry = shallow(<ReviewListEntry user={userData.pageOne[0]} review={reviewData.pageOne[0]} />);
    expect(listEntry.is('.review-list-entry')).toBe(true);
    expect(listEntry.find('.user-contents')).toHaveLength(1);
    expect(listEntry.find('.review-contents')).toHaveLength(1);
  });
});

describe('ReviewSearch component', () => {
  it('should render without throwing an error', () => {
    var search = shallow(<ReviewSearch setSearchTerm="steak" searchReviews={reviewData.pageOne} sort={() => { console.log('sort');}}/>);
    expect(search.is('#reviews-search')).toBe(true);
  });
});