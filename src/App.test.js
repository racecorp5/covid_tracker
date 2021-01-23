import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });
test('page has map', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find('.us-state-map').length).toBe(1);
});
