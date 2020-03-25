import React, { Component } from 'react';
import Lesson from '../lesson/Lesson';

class Cource extends Component {
    render() {
        return (
            <div className="col-md-4">
                <ul className="list-group">
                    <li className="list-group-item active">Reactjs</li>
                    <Lesson/>
                    <Lesson/>
                    <Lesson/>
                </ul>
            </div>
        );
    }
}

export default Cource;