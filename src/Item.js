import React from 'react'


class Item extends React.Component {

    render(){
        return (
        <div>
            <li key={this.props.i}>{this.props.item}</li>
            {/* <button onClick={(e) => this.props.callBackFn("Harness")}>Send to List</button> */}
        </div>
        )
    }
}

export default Item

//item components job is to render a single item
