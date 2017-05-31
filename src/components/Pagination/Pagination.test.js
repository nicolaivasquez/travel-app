import React from 'react';
import { shallow } from 'enzyme';
import { Pagination } from './Pagination';

const page = 1;
const pages = 10;
const onChange = jest.fn();
const pagination = shallow(<Pagination
  page={page}
  pages={pages}
  onChange={onChange}
/>);

it('should show Previous button', () => {
  expect(pagination.find('Previous')).toBeDefined();
});

it('should show Next button', () => {
  expect(pagination.find('Next')).toBeDefined();
});
