import React, { Component } from 'react';
import Character from "./Character";
import { Row, Col } from 'antd';
import { Input } from 'antd';

const { Search } = Input;

class Content extends Component {
    _onSearch = (e) => {
        let text = e.target.value
        this.props.doSearch( text )
    }
  render() {
    const { data } = this.props
    return (
        <div className="content-container">
            <Row>
                <Col lg={6} >
                    <Search placeholder="Search By Name" onChange={this._onSearch} enterButton />
                </Col>
                <Col lg={6} >
                </Col>
            </Row>
            <br/>
            <Row>
            {
                data.map( ( character, key ) => {
                    return (
                        <Col lg={5} style={{marginBottom: 10}}>
                            <Character data={character}/>
                        </Col>
                    )
                })
            }
            </Row>
        </div>
    );
  }
}

export default Content