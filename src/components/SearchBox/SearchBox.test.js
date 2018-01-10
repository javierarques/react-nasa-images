import React from 'react';
import { shallow } from 'enzyme';
import { SearchBox } from './SearchBox';

describe('SearchBox', () => {
  test('redirects to search page with the query', () => {
    const wrapper = shallow(<SearchBox />);
    const text = 'dummy text';
    wrapper.instance().search = jest.fn();
    wrapper.update();
    wrapper.setState({ query: text });
    wrapper.instance().handleSubmit();

    expect(wrapper.instance().search).toBeCalledWith(text);
  });

  test('does not redirect if nothig is searched', () => {
    const wrapper = shallow(<SearchBox />);
    const text = 'dummy text';
    wrapper.instance().search = jest.fn();
    wrapper.update();
    wrapper.instance().handleSubmit();

    expect(wrapper.instance().search).not.toBeCalled();
  });
});
