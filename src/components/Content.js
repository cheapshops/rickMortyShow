import React, { Component } from 'react';
import Character from "./Character";
import { Row, Col } from 'antd';
import { Input } from 'antd';
import { Select } from 'antd';

const { Search } = Input;
const { Option } = Select;

class Content extends Component {
    _onSearch = (e) => {
        let text = e.target.value
        this.props.doSearch( text )
    }

    _handleSorting = (e) => {
        this.props.doSort(e)
    }

  render() {
    const { data } = this.props
    return (
        <div className="content-container">
            <Row>
                <Col lg={6} >
                    <Search placeholder="Search By Name" onChange={this._onSearch} enterButton />
                </Col>
                <Col lg={16} right >
                    <Select placeholder="Sort by ID" style={{ width: 120, float:'right' }} onChange={this._handleSorting}>
                        <Option key="ascending" value="ascending">Ascending</Option>
                        <Option value="descending">Descending</Option>
                    </Select>
                </Col>
            </Row>
            <br/>
            <Row>
            {
                data.map( ( character, key ) => {
                    return (
                        <Col key={key} sm={12} md={12} lg={6} style={{marginBottom: 20}}>
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