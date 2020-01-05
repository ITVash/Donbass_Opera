import React from 'react';

//import { Register } from './components'
import { Register } from './containers'

const App = () => {
  const click = e => {
    e.preventDefault()
    console.log('Ну типа кнопка нажата')
  }
  return (
    <div className="App">
      <Register handleClick={click} />
    </div>
  );
}

export default App;
