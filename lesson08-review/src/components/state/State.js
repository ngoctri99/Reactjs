import React, { Component } from 'react'

export default class State extends Component {

    constructor(){
        super();
        this.state = {
            message: 'Chào mừng đến với kháo học reactjs cơ bản'
        }
        this.click = this.click.bind(this)
    }
    click(){
        this.setState(
            {
                message: 'Cảm ơn đã đăng ký'
            }
        )
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h2>Ôn tập state</h2>
                </div>
                <div className="col-md-12">
                    <div>
                        <p>{this.state.message}</p>
                        <button className="btn btn-success" onClick={this.click}>Đăng ký</button>
                    </div>
                </div>
            </div>
        )
    }
}
