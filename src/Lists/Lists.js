import React from 'react'
import List from './List'


export default class Lists extends React.Component {

    render(){
        return (
            <>
                <ul>
                    {this.state.lists.map((list, i) => <List key={i} list={list}/>)}
                </ul>
            </>
        )
    }
}
