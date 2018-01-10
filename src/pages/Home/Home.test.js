import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from '../../components/SearchBox';
import { Home } from './Home';

describe('Home Component', () => {
  test('has a SearchBox', () => {
    const wrapper = shallow(<Home />);

    console.log(wrapper.debug());
    expect(wrapper.find(SearchBox).length).toEqual(1);
  });
});
