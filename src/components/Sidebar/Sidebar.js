import React, { Component } from 'react';
import * as GrommetSidebar from 'grommet/components/Sidebar'
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import TextInput from 'grommet/components/TextInput';
import Checkbox from 'grommet/components/CheckBox';
import NumberInput from 'grommet/components/NumberInput';

const filters = [
  {
    label: 'Name',
    value: 'Name',
    type: 'search',
  },
  {
    label: 'Stars',
    value: 'Stars',
    type: 'select',
    options: [
      {name: 1},
      {name: 2},
      {name: 3},
      {name: 4},
      {name: 5},
    ]
  },
  {
    label: 'Rating',
    value: 'UserRating',
    type: 'number',
    min: 0,
    max: 10,
  },
  {
    label: 'Cost',
    value: 'MinCost',
    type: 'number',
    min: 0,
  }
]

class Search extends Component {
  render() {
    return (
      <TextInput
        placeHolder="Enter hotel name"
        onDOMChange={this.props.onChange}
      />
    );
  }
}

class Select extends Component {
  constructor(props) {
    super(props);

    this.state = props.options.reduce((options, option) => {
      options[option.name] = false;
      return options;
    }, {});
  }

  handleChange = (value, event) => {
    const changes = {
      [event.target.value]: event.target.checked
    };
    const newState = Object.assign({}, this.state, changes);

    this.setState(changes);
    this.props.onChange(value, event, Object.keys(newState)
      .filter((key) => newState[key]));
  }

  render() {
    return (
      <Box>
        {
          this.props.options.map((option, index) =>
          <Checkbox
            label={option.name}
            key={index}
            value={option.name}
            checked={this.state[option.name]}
            onChange={(e) => this.handleChange(this.props.value, e)}
          />
          )
        }
      </Box>
    );
  }
}

class Number extends Component {
  render() {
    return (
      <NumberInput
        min={this.props.min}
        max={this.props.max}
        onChange={this.props.onChange}
      />
    );
  }
}

export class Sidebar extends Component {
  handleChange = (key, event, ...args) => {
    this.props.onFilter(key, event.target.value, ...args);
  };

  render() {
    return (
      <GrommetSidebar>
        <Header>
          <Title>Filters</Title>
        </Header>
        <Box>
          {
            filters.map((filter) =>
            <Section key={filter.label}>
              <Heading tag="h3">{filter.label}</Heading>
              {
                filter.type === 'search' &&
                  <Search
                    onChange={(e) => this.handleChange(filter.value, e)}
                  />
              }
              {
                filter.type === 'select' &&
                  <Select
                    options={filter.options}
                    value={filter.value}
                    onChange={this.handleChange} />
              }
              {
                filter.type === 'number' &&
                  <Number
                    max={filter.max}
                    min={filter.min}
                    onChange={(e) => this.handleChange(filter.value, e)}
                  />
              }
            </Section>
            )
          }
        </Box>
      </GrommetSidebar>
    );
  }
}
