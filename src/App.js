import React from 'react'
import List from './List'


class App extends React.Component {
  
    handleClick(e) {
      console.log("clicked")
    }

    render(){
      let petStoreList = ["dog food", "new bone", "flea medication"]
      return (
        <div>
            <h1 className="greeting">Pet Store List</h1>
            <button onClick={this.handleClick}>Click Me:</button>
            <List petStoreList={petStoreList}/>
        </div>
      )
    }
}

export default App;