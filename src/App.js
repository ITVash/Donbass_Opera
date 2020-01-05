import React from 'react';

import { Block } from './components'
const click = () => {
  alert('Привет, как дела?')
}
const App = () => {
  return (
    <div className="App">
      <Block title="Я первая компонента!" value="а тут какой то текст, его может быть много!!!!" handleClick={click} />
    </div>
  );
}

export default App;
