import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../containers/search_bar';
import Observations from '../containers/observations';

export default class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
        <div style={{ height:'100%' }}>
          <SearchBar />
          <Observations />
        </div>
    );
  };
}
