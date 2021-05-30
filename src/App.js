// import React from 'react'
// this is a container component --see notes
import ListsContainer from './Lists/ListsContainer'


function App(){
  return(
    <ListsContainer />
  )
}

// class App extends React.Component {
  
//     // constructor(){
//     //   super()
//     //   this.state = {showLists: true}
//     // }

//     // toggleLists(){
//     //   this.setState(prevState => ({showLists: !prevState.showLists}))
//     // }
//     render(){
      
//       return (
//         // <div>
//         //     <button onClick={(e) => this.toggleLists()}>Toggle Lists</button>
//         //   {this.state.showLists ? <Lists /> : null}
//         // </div>
//         <Lists />
//       )
//     }
// }

export default App;