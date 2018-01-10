import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';

describe('SearchBox', () => {
  test('redirects to search page with the query', () => {
    const text = 'dummy text';
    const onSubmit = jest.fn();
    const wrapper = shallow(<SearchBox onSubmit={onSubmit} />);
    wrapper.setState({ query: text });
    wrapper.instance().handleSubmit();

    expect(onSubmit).toBeCalledWith(text);
  });

  test('does not redirect if nothig is searched', () => {
    const onSubmit = jest.fn();
    const wrapper = shallow(<SearchBox onSubmit={onSubmit} />);
    wrapper.instance().handleSubmit();

    expect(onSubmit).not.toBeCalled();
  });
});
