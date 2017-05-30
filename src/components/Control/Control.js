import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Columns from 'grommet/components/Columns';
import Sort from 'grommet-addons/components/Sort';

const options = [
  {label: 'A', value: 'A'},
  {label: 'B', value: 'B'},
]

export class Control extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Section>
        <Columns>
          <Box></Box>
          <Box>
            <Sort
              value="A"
              options={options}
            />
          </Box>
        </Columns>
      </Section>
    );
  }
}
