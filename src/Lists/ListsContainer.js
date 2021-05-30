import React, {Component} from 'react'
import Lists from './Lists'
import ListForm from './ListForm'

export default class ListsContainer extends Component {

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

    render() {
        return(
        <div>
            <ListForm sendData={this.updateState} />
            <Lists lists={this.state.lists} />
        </div>
        )
    }


}