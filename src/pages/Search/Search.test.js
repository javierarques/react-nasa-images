import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';
import GalleryItem from '../../components/GalleryItem';

describe('Search Component', () => {
  test('displays a gallery', () => {
    const props = { match: { params: { query: 'query' } } };
    const state = {
      assets: [
        {
          data: [{ title: 'Title 1', nasaId: 'id1' }],
          links: [{ href: 'URL1' }]
        },
        {
          data: [{ title: 'Title 2', nasaId: 'id2' }],
          links: [{ href: 'URL2' }]
        }
      ],
      isLoading: false
    };

    const wrapper = shallow(<Search {...props} />);
    wrapper.setState(state);

    expect(wrapper.find(GalleryItem)).toHaveLength(2);
  });

  test('show message if there are no assets', () => {
    const props = { match: { params: { query: 'query' } } };
    const state = { isLoading: false, assets: [] };

    const wrapper = shallow(<Search {...props} />);
    wrapper.setState(state);

    expect(wrapper.find(GalleryItem)).toHaveLength(0);

    expect(wrapper.find('.Search-errorMessage')).toHaveLength(1);
  });
});
