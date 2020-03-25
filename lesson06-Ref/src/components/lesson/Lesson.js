import React, { Component } from 'react';

class Lesson extends Component {
    render() {
        return (

            <p> Thơi lượng khóa học: {this.props.time}</p>
        );
    }
}

export default Lesson;