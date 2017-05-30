import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Columns from 'grommet/components/Columns';
import Sort from 'grommet-addons/components/Sort';

const options = [
  {label: 'Name', value: 'Name'},
  {label: 'Distance', value: 'Distance'},
  {label: 'Stars', value: 'Stars'},
  {label: 'Cost', value: 'MinCost'},
  {label: 'User Rating', value: 'UserRating'},
]

export class Control extends Component {
  constructor(props) {
    super(props);
  }

  handleSort = ({value, direction}) => {
    this.props.onSort(value, direction);
  }

  render() {
    return (
      <Section>
        <Columns>
          <Box></Box>
          <Box>
            <Sort
              value={options[0].value}
              options={options}
              onChange={this.handleSort}
            />
          </Box>
        </Columns>
      </Section>
    );
  }
}
