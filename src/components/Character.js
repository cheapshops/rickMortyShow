import React, { Component } from 'react';
import { Card } from 'antd';
import { Row, Col } from 'antd';

class Character extends Component {
  render() {
    const { data } = this.props
    console.log( data )
    let cd = data.created
    var d = new Date(cd);
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1;
    var curr_year = d.getFullYear();

    let cdate = curr_month + "/" + curr_date + "/" + curr_year;

    console.log( curr_date )

    return (
        <div className="char-block">
            <div>
                <img className="char-image" src={data.image}/>
            </div>
            <div className="name-block">
                <span className="name">{data.name}</span>
                <br/>
                ID: { data.id } - created { cdate }
            </div>
            <div className="other-info">
                <div className="other-detail">
                    <span>STATUS</span>
                    <span className="value">{data.status || ""}</span>
                </div>
                <div className="other-detail">
                    <span>SPECIES</span>
                    <span className="value">{data.species || ""}</span>
                </div>
                <div className="other-detail">
                    <span>GENDER</span>
                    <span className="value">{data.gender || ""}</span>
                </div>
                <div className="other-detail">
                    <span>ORIGIN</span>
                    <span className="value">{data.origin.name || ""}</span>
                </div>
                <div className="other-detail">
                    <span>LAST LOCATION</span>
                    <span className="value">{data.location.name || ""}</span>
                </div>
            </div>
        </div>
    );
  }
}

export default Character