// import React from 'react'
// this is a container component --see notes
import Lists from './Lists'


function App(){
  return(
    <Lists/>
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