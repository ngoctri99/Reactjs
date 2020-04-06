import React, { Component } from 'react'
import './footer.css'

export default class Footer extends Component {
    constructor(){
        super();
            this.email = React.createRef();
            this.fullname = React.createRef();
            this.sends = this.sends.bind(this);

            this.state = {
                mes : ''
            }
        
    }

    sends(){
        alert(this.email.current.value);
        // let imes = this.fullname.current.value;
        this.setState ( {
            mes : 'thanks'
        })
    }
    render() {
        return (
            <div className="footer">
                <div className="form">
                    <div className="input-box">
                        <input type="email" placeholder="Email" ref={this.email}/>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Fullname" ref={this.fullname}/>
                    </div>
                    <div className="mes">
                        <p>{this.state.mes}</p>
                    </div>
                    <div className="send">
                        <button className="btn btn-danger" onClick={this.sends}>Send</button>
                    </div>
                    
                </div>
            </div>
        )
    }
}
