import React from 'react'
import List from './List'
import ListForm from './ListForm'

class Lists extends React.Component {

    constructor() {
        super()
        this.state = {
            lists: [],
        }
        this.updateState = this.updateState.bind(this)
    }

    componentDidMount(){
        fetch("http://localhost:3000/lists")
        .then(function(response) {
            return response.json()
        })
        .then((listsArray) => {
            this.setState({lists: listsArray})
        })
    }


    updateState(arg){
        this.setState((prevState, prevProps) => {
            return {lists: [...prevState.lists, arg]}
        })
    }

    render(){
        return (
            <div>
                <ListForm sendData={this.updateState}/>
                <ul>
                    {this.state.lists.map((list, i) => <List key={i} list={list}/>)}
                </ul>
            </div>
        )
    }

}

export default Lists