import React, { Component } from 'react'

export default class Refs extends Component {
    constructor(props){
        super(props);
        this.inputtext = React.createRef();
        this.btnClick = this.btnClick.bind(this);
    }

    btnClick = () =>{
        alert(this.inputtext.current.value)
    }
    render() {
        
        return (
            <div className="row">
                <div className="col-md-12">
                    <h2>Ôn tập Refs</h2>
                </div>
                <div className="col-md-12">
                    <div className="input-box">
                        <input type="text" ref={this.inputtext}/>
                        <button className="btn btn-danger" onClick={this.btnClick}>Alert text</button>
                    </div>
                </div>

            </div>
        )
    }
}
