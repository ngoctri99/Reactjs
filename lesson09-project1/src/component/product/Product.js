import React, { Component } from 'react'
import './product.css'

export default class Product extends Component {
    render() {
        return (
            <div className="col-md-4">
                <div className="product">
                    <h5>{this.props.name}</h5>
                    <p>{this.props.des}</p>
                </div>
                
            </div>
        )
    }
}
