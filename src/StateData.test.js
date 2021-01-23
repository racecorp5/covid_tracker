import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StateData from './StateData';

Enzyme.configure({ adapter: new Adapter() });
test('shows correct info', () => {
  const data = {
    state: 'TX',
    dateModified: 'January',
    hospitalized: '400',
    deathConfirmed: '100',
  };

  const wrapper = shallow(<StateData data={data} />);
  expect(wrapper.text()).toContain('State: TX');
  expect(wrapper.text()).toContain('Updated: January');
  expect(wrapper.text()).toContain('Hospitalized: 400');
  expect(wrapper.text()).toContain('Confirmed Deaths: 100');
});
