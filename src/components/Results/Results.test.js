import React from 'react';
import { shallow } from 'enzyme';
import { Results } from './Results';

const hotels = [
  {
    Location: 'foo',
    Name: 'foo',
    ThumbnailUrl: ''
  },
  {
    Location: 'bar',
    Name: 'bar',
    ThumbnailUrl: ''
  }
];

it('renders a Section component', () => {
  const results = shallow(
    <Results
      hotels={[]}
    />
  );
  expect(results.find('Section')).toBeDefined();
});

it('renders a tile for each hotel', () => {
  const results = shallow(
    <Results
      hotels={hotels}
    />
  );
  expect(results.find('Tile').length).toEqual(hotels.length);
});

it('limits the number of hotels shown in a page to 20', () => {
  const hotelsMany = [... new Array(25)].map((i) => hotels[0]);
  const results = shallow(
    <Results
      hotels={hotelsMany}
    />
  );
  const expected = 20;

  expect(results.instance().hotelsInPage().length).toEqual(expected);
});
