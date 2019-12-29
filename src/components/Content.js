import React, { Component } from 'react';
import Character from "./Character";
import { Row, Col } from 'antd';

class Content extends Component {
  render() {
    const { data } = this.props
    console.log( data )
    return (
        <div className="content-container">
            <h1>Content</h1>
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