import React, { Component } from 'react';
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Section from 'grommet/components/Section';

export class Banner extends Component {
    render() {
        return (
            <Section>
                <Hero
                    background={<Image
                        src="http://stockfresh.com/files/m/maridav/m/24/1537797_stock-photo-tourists-couple-travel-in-havana-cuba.jpg"
                        fit='cover'
                        full={true}
                    />}
                />
            </Section>
        );
    }
}