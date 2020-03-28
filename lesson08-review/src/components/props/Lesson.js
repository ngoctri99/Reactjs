import React, { Component } from 'react';
import './lesson.css';

export default class Lesson extends Component {
    render() {
        return (
            <div className="col-md-3">
                <div className="lesson">
                    <p>{this.props.name}</p>
                    <p>{this.props.time}</p>
                </div>
            </div>
        )
    }
}
