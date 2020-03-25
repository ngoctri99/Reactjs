import React, { Component } from 'react';
import Lesson from '../lesson/Lesson';

class Cource extends Component {
    Showbtn(){
        const isFree = this.props.free;
        console.log("isFree", isFree);
        if(isFree){
            return  <div className="btnview">
                    <button className="btn btn-danger"> view</button>
                </div>
            ;
        }
    }
    render() {
        return (
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <h5>{this.props.children}</h5>
                        <Lesson time="30"/>
                        {this.Showbtn()}
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Cource;