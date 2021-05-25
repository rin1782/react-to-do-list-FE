import React from 'react'
import List from './List'


class App extends React.Component {
  
    // handleClick(e) {
      
    //   console.log("clicked")
    // }

    render(){
  
      return (
        <div>
            <h1 className="greeting">Pet Store List</h1>
            {/* <button onClick={this.handleClick.bind(this)}>Click Me:</button> */}
            <List />
        </div>
      )
    }
}

export default App;