import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import * as data from './data';

jest.mock('./data', () => ({
  getHotels: jest.fn().mockReturnValue(new Promise((resolve) => {
    resolve();
  }))
}));

const app = shallow(<App />);

describe('.updateHotelList', () => {
  it('should call getHotels method', () => {
    const expected = {
      filter: {},
      sort: {},
    };

    app.instance().updateHotelList({});

    expect(data.getHotels).toBeCalledWith(expected);
  });
});

