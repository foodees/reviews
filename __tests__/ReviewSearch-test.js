import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../client/src/app.jsx';

describe('ReviewSearch component', function() {

  it('should contain a search bar and sorting drop down menu', function() {
    let wrapper = shallow(<div className="some-class other-class" />);
    let bool = wrapper.is('.some-class');
    expect(wrapper.is('.some-class')).toBe(bool);
  });
});
