import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'antd';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Filters from "./components/Filters"
import Content from "./components/Content"
import { fetchCharacterRequest, toggleFilter } from './redux/actions'


class App extends Component {

    componentDidMount(){
        // this.props.fetchCharacterRequest()
    }
    render() {
        return (
            <div>
                <Header/>
                <Row>
                    <Col lg={4} sm={6}>
                        <Filters filters={this.props.filters} toggleFilter={this.props.toggleFilter}/>
                    </Col>
                    <Col lg={20} sm={6}>
                        <Content data={this.props.characters.data}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    filters: state.filters,
    characters: state.characters,
})

const mapDisptachToProps = dispatch => ({
  fetchCharacterRequest: (data) => dispatch( fetchCharacterRequest()),
  toggleFilter: (data) => dispatch( toggleFilter(data)),
})

export default connect(
  mapStateToProps,
  mapDisptachToProps
)( App )