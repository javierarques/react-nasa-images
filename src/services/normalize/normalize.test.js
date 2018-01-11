import normalize from './normalize';

describe('normalize', () => {
  test('search', () => {
    const response = {
      collection: {
        version: '1.0',
        items: [
          {
            data: [
              {
                date_created: '2014-08-07T19:51:51Z',
                keywords: ['Pluto', 'New Horizons'],
                center: 'JPL',
                title: 'A Moon over Pluto Animation',
                media_type: 'image',
                description:
                  'This animation of Pluto and its largest moon, Charon, was taken by NASA New Horizons spacecraft as it raced toward Pluto in July 2014.',
                nasa_id: 'PIA11217',
                description_508:
                  'This animation of Pluto and its largest moon, Charon, was taken by NASA New Horizons spacecraft as it raced toward Pluto in July 2014.',
                secondary_creator:
                  'NASA/Johns Hopkins University Applied Physics Laboratory/Southwest Research Institute'
              }
            ],
            href:
              'https://images-assets.nasa.gov/image/PIA11217/collection.json',
            links: [
              {
                rel: 'preview',
                href:
                  'https://images-assets.nasa.gov/image/PIA11217/PIA11217~thumb.jpg',
                render: 'image'
              }
            ]
          },
          {
            data: [
              {
                date_created: '1998-03-28T14:44:27Z',
                keywords: ['Pluto', 'Hubble Space Telescope'],
                center: 'JPL',
                title: 'Map of Pluto Surface',
                media_type: 'image',
                description:
                  'This image-based surface map of Pluto was assembled by computer image processing software from four separate images of Pluto disk taken with the European Space Agency Faint Object Camera aboard NASA Hubble Space Telescope.',
                nasa_id: 'PIA00826',
                description_508:
                  'This image-based surface map of Pluto was assembled by computer image processing software from four separate images of Pluto disk taken with the European Space Agency Faint Object Camera aboard NASA Hubble Space Telescope.',
                secondary_creator:
                  'Alan Stern Southwest Research Institute, Marc Buie Lowell Observatory, NASA and ESA'
              }
            ],
            href:
              'https://images-assets.nasa.gov/image/PIA00826/collection.json',
            links: [
              {
                rel: 'preview',
                href:
                  'https://images-assets.nasa.gov/image/PIA00826/PIA00826~thumb.jpg',
                render: 'image'
              }
            ]
          }
        ],
        metadata: { total_hits: 1 },
        href: 'https://images-api.nasa.gov/search?nasa_id=PIA11217'
      }
    };

    const expectedResponse = [
      {
        dateCreated: '2014-08-07T19:51:51Z',
        title: 'A Moon over Pluto Animation',
        description:
          'This animation of Pluto and its largest moon, Charon, was taken by NASA New Horizons spacecraft as it raced toward Pluto in July 2014.',
        nasaId: 'PIA11217',
        secondaryCreator:
          'NASA/Johns Hopkins University Applied Physics Laboratory/Southwest Research Institute',
        image:
          'https://images-assets.nasa.gov/image/PIA11217/PIA11217~thumb.jpg'
      },
      {
        dateCreated: '1998-03-28T14:44:27Z',
        title: 'Map of Pluto Surface',
        description:
          'This image-based surface map of Pluto was assembled by computer image processing software from four separate images of Pluto disk taken with the European Space Agency Faint Object Camera aboard NASA Hubble Space Telescope.',
        nasaId: 'PIA00826',
        secondaryCreator:
          'Alan Stern Southwest Research Institute, Marc Buie Lowell Observatory, NASA and ESA',
        image:
          'https://images-assets.nasa.gov/image/PIA00826/PIA00826~thumb.jpg'
      }
    ];

    expect(normalize.search(response)).toEqual(expectedResponse);
  });

  test('asset', () => {
    const response = {
      collection: {
        version: '1.0',
        items: [
          {
            data: [
              {
                date_created: '2014-08-07T19:51:51Z',
                keywords: ['Pluto', 'New Horizons'],
                center: 'JPL',
                title: 'A Moon over Pluto Animation',
                media_type: 'image',
                description:
                  'This animation of Pluto and its largest moon, Charon, was taken by NASA New Horizons spacecraft as it raced toward Pluto in July 2014.',
                nasa_id: 'PIA11217',
                description_508:
                  'This animation of Pluto and its largest moon, Charon, was taken by NASA New Horizons spacecraft as it raced toward Pluto in July 2014.',
                secondary_creator:
                  'NASA/Johns Hopkins University Applied Physics Laboratory/Southwest Research Institute'
              }
            ],
            href:
              'https://images-assets.nasa.gov/image/PIA11217/collection.json',
            links: [
              {
                rel: 'preview',
                href:
                  'https://images-assets.nasa.gov/image/PIA11217/PIA11217~thumb.jpg',
                render: 'image'
              }
            ]
          }
        ],
        metadata: { total_hits: 1 },
        href: 'https://images-api.nasa.gov/search?nasa_id=PIA11217'
      }
    };

    const expectedResponse = {
      dateCreated: '2014-08-07T19:51:51Z',
      title: 'A Moon over Pluto Animation',
      description:
        'This animation of Pluto and its largest moon, Charon, was taken by NASA New Horizons spacecraft as it raced toward Pluto in July 2014.',
      nasaId: 'PIA11217',
      secondaryCreator:
        'NASA/Johns Hopkins University Applied Physics Laboratory/Southwest Research Institute',
      image: 'https://images-assets.nasa.gov/image/PIA11217/PIA11217~thumb.jpg'
    };

    expect(normalize.asset(response)).toEqual(expectedResponse);
  });
});
