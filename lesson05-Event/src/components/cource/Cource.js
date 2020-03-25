import React, { Component } from 'react';
import Lesson from '../lesson/Lesson';

class Cource extends Component {

    constructor(props) {
        super(props);
        this.btnBuy = this.btnBuy.bind(this);
    }

    btnView(){
        // onClick không truyền tham số
        alert("Thông tin khóa học");
    }

    btnClick(param){
        // onClick sử có truyền tham số
        // Khi gọi lại phỉa sử dụng arowFunction
        alert(param);
    }
    btnBuy(){
        // onClick sử dụng props
        alert(this.props.name);
    }
    Showbtn(){
        const isFree = this.props.free;
        console.log("isFree", isFree);
        if(isFree){
            return  <div className="btnview">
                    <button onClick={this.btnView} className="btn btn-danger"> view</button>
                    <button onClick={this.btnBuy} className="btn btn-success"> Buy</button> 
                    <button onClick={()=>this.btnClick("Tham số truyền vào")} className="btn btn-success"> Tham số</button>
                </div>
            ;
        }
    }
    render() {
        return (
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <h5>{this.props.name}</h5>
                        <Lesson time="30"/>
                        {this.Showbtn()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Cource;