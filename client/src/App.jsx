import React from 'react'
import server from './server'
function App() {

  async function test() {
    try {
      const {data} = await server.get('hi')
      // console.log(data)
      
    }
    catch(err) {
      console.log("Error")
    }
    
  }
  return (
    <div>
      <h1>Hi</h1>
      <button onClick={test}>Submit</button>
    </div>
  )
}

export default App