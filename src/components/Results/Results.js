import React, {Component} from 'react';
import Section from 'grommet/components/Section';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Card from 'grommet/components/Card';
import Box from 'grommet/components/Box';
import Columns from 'grommet/components/Columns';
import Image from 'grommet/components/Image';
import Button from 'grommet/components/Button';
import { Pagination } from '../Pagination/Pagination';

const limit = 20;

export class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      pages: Math.ceil(this.props.hotels.length / limit) || 0,
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps && JSON.stringify(nextProps) !== this.props) {
      this.setState({
        page: 0,
        pages: Math.ceil(nextProps.hotels.length / limit) || 0,
      });
    }
  }

  hotelsInPage = () => {
    const start = this.state.page * limit;
    const end = start + limit;

    return this.props.hotels
      .slice(start, end);
  }

  handlePageChange = (page) => {
    this.setState({page})
  }

  render() {
    return (
      <Section>
        <Pagination
          page={this.state.page}
          pages={this.state.pages}
          onChange={this.handlePageChange}
        />
        <Tiles>
          {
            this.hotelsInPage().map((hotel, index) =>
            <Tile key={index}>
              <Card
                label={hotel.Location}
                heading={hotel.Name}
                description={<Columns size="small">
                  <Box>
                    <Image
                      src={hotel.ThumbnailUrl}
                      size="thumb"
                    />
                  </Box>
                  <Box>
                    <Button
                      label="View Details"
                      onClick={() => this.props.onDetail(hotel)}
                      primary={true}
                    />
                  </Box>
                </Columns>}
              />
            </Tile>
            )
          }
        </Tiles>
        <Pagination/>
      </Section>
    );
  }
}
