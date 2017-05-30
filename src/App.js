import React, { Component } from 'react';
import '../node_modules/grommet-css';
import * as GrommetApp from 'grommet/components/App';
import Article from 'grommet/components/Article';
import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner';
import { Control } from './components/Control/Control';
import { Results } from './components/Results/Results';
import { getHotels } from './data';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hotels: [],
    }
  }

  componentWillMount() {
    getHotels()
      .then((hotels) => {
        console.log(hotels);
        this.setState({hotels});
      });
  }

  render() {
    return (
      <GrommetApp>
          <Article>
              <Header />
              <Banner />
              <Control/>
              <Results hotels={this.state.hotels} />
          </Article>
      </GrommetApp>
    );
  }
}

export default App;
