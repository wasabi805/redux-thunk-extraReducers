import React from 'react'
import ButtonWrapper from './ButtonWrapper'

function App() {
  return (
    <div className="App">
      <ButtonWrapper render={() => console.log('hi')} />
    </div>
  )
}

export default App
