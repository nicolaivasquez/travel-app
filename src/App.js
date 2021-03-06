import React, { Component } from 'react';
import '../node_modules/grommet-css';
import * as GrommetApp from 'grommet/components/App';
import Article from 'grommet/components/Article';
import Split from 'grommet/components/Split';
import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner';
import { Control } from './components/Control/Control';
import { Results } from './components/Results/Results';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Detail } from './components/Detail/Detail';
import { getHotels } from './data';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hotels: [],
      filter: {},
      sort: {},
      detail: {},
      showDetail: false,
    }
  }

  componentWillMount() {
   this.updateHotelList({});
  }

  updateHotelList = ({filter = {}, sort = {}}) => {
    getHotels({
      filter: filter || this.state.filter,
      sort: sort || this.state.sort,
    })
      .then((hotels) => {
        this.setState({hotels});
      })
  }

  handleSort = (value, direction) => {
    const sort = {
      value,
      direction,
    };

    this.setState({sort});
    this.updateHotelList({sort});
  }

  handleFilter = (key, value, values = null) => {
    const changes = {
      [key]: values || value
    }
    const filter = Object.assign({}, this.state.filter, changes);

    this.setState({filter});
    this.updateHotelList({filter})
  }

  handleDetail = (hotel) => {
    this.setState({
      detail: hotel || {},
      showDetail: !this.state.showDetail,
    })
  }

  render() {
    return (
      <GrommetApp>
          <Article>
              <Header />
              <Banner />
              <Control
                onSort={this.handleSort}
              />
              <Split
                showOnResponsive="both"
                flex="right"
              >
                <Sidebar
                  onFilter={this.handleFilter}
                />
                <Results
                  hotels={this.state.hotels}
                  onDetail={this.handleDetail}
                />
              </Split>

          </Article>
          <Detail
            hotel={this.state.detail}
            show={this.state.showDetail}
            onClose={() => this.handleDetail()}
          />
      </GrommetApp>
    );
  }
}

export default App;
