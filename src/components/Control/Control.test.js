import React from 'react';
import { shallow } from 'enzyme';
import { Control } from './Control';

describe('.handleSort', () => {
  it('should call onSort method', () => {
    const onSort = jest.fn();
    const control = shallow(
      <Control
        onSort={onSort}
      />
    );
    const args = {
      value: 'foo',
      direction: 'bar',
    };

    control.instance().handleSort(args);
    expect(onSort).toBeCalledWith(args.value, args.direction);
  });
});
