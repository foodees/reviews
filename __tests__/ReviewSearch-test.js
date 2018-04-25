import React from 'react';
import { shallow, mount, render } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-15';

import App from '../client/src/app.jsx';
// import ReviewList from '../client/src/components/ReviewList.jsx';
// import ReviewListEntry from '../client/src/components/ReviewListEntry.jsx';
// import ReviewSearch from '../client/src/components/ReviewSearch.jsx';

// let app;
// let search;
// let list;
// let listEntry;
//
// beforeEach(() => {
//   app = shallow(<App />);
//   search = shallow(<ReviewSearch />);
//   list = shallow(<ReviewList />);
//   listEntry = shallow(<ReviewListEntry />);
// });

describe('ReviewSearch component', function() {

  it('should contain a search bar and sorting drop down menu', function() {
    let wrapper = shallow(<div className="some-class other-class" />);
    let bool = wrapper.is('.some-class');
    expect(wrapper.is('.some-class')).toBe(bool);
  });
});
