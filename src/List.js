import React from 'react'
import Item from './Item'


class List extends React.Component {

    static defaultProps = {
        petStoreList: []
    }

    render(){
        return (
            <ul>
                {this.props.petStoreList.map((item, i) => <Item key={i} item={item} i={i}/> )}
            </ul>
        )
    }

}


export default List

//List components job is to render a list of item components