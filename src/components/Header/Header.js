import React, { Component } from 'react';
import * as GrommetHeader from 'grommet/components/Header';
import Title from 'grommet/components/Title';

export class Header extends Component {
    render() {
        return (
            <GrommetHeader>
                <Title>
                    Travel Republic App Test
                </Title>
            </GrommetHeader>
        );
    }
}