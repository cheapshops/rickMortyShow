import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'antd';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Filters from "./components/Filters"
import Content from "./components/Content"
import { fetchCharacterRequest, toggleFilter, doSearch, doSort, doFilter } from './redux/actions'


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            filters: props.filters
        }
    }

    componentDidMount(){
        this.props.fetchCharacterRequest()
    }

    static getDerivedStateFromProps(props, state) {
        if( state.filters != props.filters ){
            // console.log('DOOOOOOOOO')
            // console.log('DOOOOOOOOO')
            // console.log('DOOOOOOOOO')
            console.log('DOOOOOOOOO')
            console.log( props )
            props.doFilter(props.filters.filters)
            return {
                filters: props.filters
            }

        }
        return null
    }

    render() {
        // console.log( this.state.filters )
        return (
            <div>
                <Header/>
                <Row>
                    <Col lg={4} sm={6}>
                        <Filters filters={this.props.filters} toggleFilter={this.props.toggleFilter}/>
                    </Col>
                    <Col lg={20} sm={16}>
                        <Content
                            data={this.props.characters.data}
                            doSearch={this.props.doSearch}
                            doSort={this.props.doSort}
                        />
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
  doSearch: (data) => dispatch( doSearch(data)),
  doSort: (data) => dispatch( doSort(data)),
  doFilter: (data) => dispatch( doFilter(data)),
})

export default connect(
  mapStateToProps,
  mapDisptachToProps
)( App )