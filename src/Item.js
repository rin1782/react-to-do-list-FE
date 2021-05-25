import React from 'react'

class Item extends React.Component {

    render(){
        return (
        <li key={this.props.i}>{this.props.item}</li>
        )
    }
}

export default Item

//item components job is to render a single item
