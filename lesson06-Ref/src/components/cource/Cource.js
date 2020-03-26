import React, { Component } from 'react';
import Lesson from '../lesson/Lesson';

class Cource extends Component {

    constructor(props) {
        super(props);
        this.username = React.createRef();
        this.btnBuy = this.btnBuy.bind(this);
        this.register = this.register.bind(this);
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

    // arowFunction
    register = () => {
        alert(this.username.current.value);
    }

    

    Showbtn(){
        const isFree = this.props.free;
        // console.log("isFree", isFree);
        if(isFree){
            return  <div className="btnview">
                    <button onClick={this.btnView} className="btn btn-danger"> view</button>
                    <button onClick={this.btnBuy} className="btn btn-success"> Buy</button> 
                    <button onClick={()=>this.btnClick("Tham số truyền vào")} className="btn btn-success"> Tham số</button>
                </div>
            ;
        }else {
            return (
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <button onClick={this.register} className="input-group-text" id="basic-addon1">Go</button>
                    </div>
                    <input ref={this.username} type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
            )
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