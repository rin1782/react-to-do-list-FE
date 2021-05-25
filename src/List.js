import React from 'react'
import Item from './Item'
import ItemForm from './ItemForm'


class List extends React.Component {

    constructor(props){
        super(props)
        this.state = {petStoreList: ["dog food", "new bone", "flea medication"], otherValue: "hi"}
        this.updateState = this.updateState.bind(this)
    }

    // static defaultProps = {
    //     petStoreList: []
    // }
    updateState(arg){
        
        this.setState((prevState, prevProps) => { 
            return {petStoreList: [...prevState.petStoreList, arg]}
        })
        // this.setState({petStoreList: [...this.state.petStoreList, "harness"]})
            //^better to use a callback function instead of this, because state won't change until the last one its asynchronous
    }

    render(){
        
        return (
        <div>
            <ItemForm sendData={this.updateState}/>
            <ul>
                {this.state.petStoreList.map((item, i) => <Item key={i} item={item} i={i} /> )}
            </ul>
        </div>
        )
    }

}


export default List

//List components job is to render a list of item components

            //below is a button/callback fn to send props from child to parent
// <button onClick={this.updateState}>Click to update</button>
// callBackFn={this.updateState}