// import enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

Enzyme.configure({
  adapter: new EnzymeAdapter()
});
