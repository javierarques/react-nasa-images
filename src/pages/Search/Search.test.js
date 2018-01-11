import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';
import GalleryItem from '../../components/GalleryItem';

describe('Search Component', () => {
  test('displays a gallery', () => {
    const props = {
      match: {
        params: {
          query: 'query'
        }
      }
    };

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
      ]
    };

    const wrapper = shallow(<Search {...props} />);
    wrapper.setState(state);

    console.log(wrapper.debug());
    expect(wrapper.find(GalleryItem).length).toEqual(2);
  });
});
