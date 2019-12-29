import React, { Component } from 'react';
import { Checkbox } from 'antd';
import { Row, Col } from 'antd';

class Filters extends Component {

    _onFilterToggle = () => {

    }

    _renderFilterBlock = ( fType, fs ) => {
        console.log( fType )
        console.log( fs )

        let f = []
        for ( var k in fs ){
            f.push(
                <Row>
                    <Col lg={12}>
                        <Checkbox key={k} onChange={this._onFilterToggle}>{k}</Checkbox>
                    </Col>
                </Row>
            )
        }

        return (
            <div>
                <h3>{fType}</h3>
                {f}
            </div>
        )
    }
    render() {
        const { filters } = this.props.filters
        console.log( filters )
        let fsC = []
        for ( var k in filters ){
            fsC.push( this._renderFilterBlock(k, filters[k]) )
        }
        return (
            <div className="filters-container">
                <h1>Filters</h1>
                {fsC}
            </div>
        );
    }
}

export default Filters