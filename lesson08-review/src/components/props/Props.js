import React, { Component } from 'react'
import Lesson from './Lesson'

export default class Props extends Component {

    render() {
       
        const items = [
            {
                id : 1,
                name : 'Tuần 1',
                time : '15h'

            },
            {
                id : 2,
                name : 'Tuần 2',
                time : '14h'

            },
            {
                id : 3,
                name : 'Tuần 3',
                time : '12h'

            },
            {
                id : 4,
                name : 'Tuần 4',
                time : '4h'

            }
        ];

        const elements = items.map((item, index) => 
            <Lesson key={item.id} name={item.name} time={item.time} />
        )
        return (
            <div className="col-md-12">
                <h2>{this.props.title}</h2>
                <div className="row">
                {elements}
                </div>
            </div>
        )
    }
}
