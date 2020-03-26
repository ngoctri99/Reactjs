import React, { Component } from 'react';

class State extends Component {

    constructor(){
        super()
        this.state = {
            message: 'Wellcome to reactjs'
        }
    }

    changetext(){
        // Sử dụng setState để thay đổi giá trị của state 
        this.setState({
            message : 'Thanks'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button className="btn badge-info" onClick={() => this.changetext()} >Click change text</button>
            </div>
        );
    }
}

export default State;