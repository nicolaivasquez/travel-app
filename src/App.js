import React, { Component } from 'react';
import '../node_modules/grommet-css';
import * as GrommetApp from 'grommet/components/App';
import Article from 'grommet/components/Article';
import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner';
import { Results } from './components/Results/Results';
import './App.css';

class App extends Component {
  render() {
    return (
      <GrommetApp>
          <Article>
              <Header />
              <Banner />
              <Results />
          </Article>
      </GrommetApp>
    );
  }
}

export default App;
