import React, { Component } from 'react';
import { Card } from 'antd';
import { Row, Col } from 'antd';

class Character extends Component {
  render() {
    const { data } = this.props
    console.log( data )
    return (
        <div className="char-block">
            <div>
                <img className="char-image" src={data.image}/>
            </div>
            <div className="name">
                <span>{data.name}</span>
                <br/>
                ID: { data.id } - created { data.created }
            </div>
            <div className="other-info">
                <div>
                    <span>STATUS</span>
                    <span>{data.status || ""}</span>
                </div>
                <div>
                    <span>SPECIES</span>
                    <span>{data.species || ""}</span>
                </div>
                <div>
                    <span>GENDER</span>
                    <span>{data.gender || ""}</span>
                </div>
                <div>
                    <span>ORIGIN</span>
                    <span>{data.origin.name || ""}</span>
                </div>
                <div>
                    <span>LAST LOCATION</span>
                    <span>{data.location.name || ""}</span>
                </div>
            </div>
        </div>
    );
  }
}

export default Character