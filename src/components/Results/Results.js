import React, {Component} from 'react';
import Section from 'grommet/components/Section';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Card from 'grommet/components/Card';
import Box from 'grommet/components/Box';
import Columns from 'grommet/components/Columns';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import Meter from 'grommet/components/Meter';
import Value from 'grommet/components/Value';
import Image from 'grommet/components/Image';

export class Results extends Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  render() {
    return (
      <Section>
        <Tiles>
          {
            this.props.hotels.map((hotel, index) =>
            <Tile key={index}>
              <Card
                label={hotel.Location}
                heading={hotel.Name}
                description={<Columns>
                  <Box>

                  </Box>
                  <Box>
                    <Image
                      src={hotel.ThumbnailUrl}
                      size="thumb"
                    />
                  </Box>
                </Columns>}
              />
            </Tile>
            )
          }
        </Tiles>
      </Section>
    );
  }
}
