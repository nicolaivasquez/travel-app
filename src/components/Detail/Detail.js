import React, { Component } from 'react';
import Layer from 'grommet/components/Layer';
import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Section from 'grommet/components/Section';
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';
import Label from 'grommet/components/Label';
import Paragraph from 'grommet/components/Paragraph';
import Value from 'grommet/components/Value';
import Button from 'grommet/components/Button';
import CloseIcon from 'grommet/components/icons/base/Close';

export class Detail extends Component {
  render() {
    return (
      <Layer
        hidden={!this.props.show}
        closer={
          <Button
            icon={<CloseIcon/>}
            onClick={this.props.onClose}
          />
        }
      >
        {
          this.props.hotel &&
          <Article>
            <Header>
              <Title>{this.props.hotel.Name}</Title>
            </Header>
            <Section>
              <Hero
                background={<Image
                  src={this.props.hotel.ImageUrl}
                  fit='cover'
                  full={true}
                />}
              />
              <Label size="medium" margin="small">{this.props.hotel.EstablishmentType}</Label>
              <Label size="medium" margin="small">{this.props.hotel.Location}</Label>
              <Box>
                <Paragraph>
                  Stars: <Value size="small" value={this.props.hotel.Stars} /><br />
                  User Rating: {this.props.hotel.UserRatingTitle} <Value size="small" value={this.props.hotel.UserRating} /> ({this.props.hotel.UserRatingCount} ratings)<br />
                  Cost: ${(this.props.hotel.MinCost || 0).toLocaleString()}
                </Paragraph>
              </Box>
            </Section>
          </Article>
        }

      </Layer>
    );
  }
}
