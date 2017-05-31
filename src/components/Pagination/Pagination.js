import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button'
import Title from 'grommet/components/Title'

export class Pagination extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Section>
        <Box
          direction="row"
          justify="start"
          align="center"
          wrap={true}
          margin="small"
        >
          {
            this.props.page > 0 &&
              <Button label="Previous" onClick={() => this.props.onChange(this.props.page - 1)} />
          }
          {
            this.props.page < this.props.pages - 1 &&
            <Button label="Next" onClick={() => this.props.onChange(this.props.page + 1)} />
          }
        </Box>
      </Section>
    );
  }
}
