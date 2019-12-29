import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';

import { fetchCharacterRequest } from './redux/actions'

class App extends Component {

    componentDidMount(){
        this.props.fetchCharacterRequest()
    }
  render() {
    console.log( this.props )
    return (
      <h1>Rick And Morty Show</h1>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login
})

const mapDisptachToProps = dispatch => ({
  fetchCharacterRequest: (data) => dispatch( fetchCharacterRequest())
})

export default connect(
  mapStateToProps,
  mapDisptachToProps
)( App )