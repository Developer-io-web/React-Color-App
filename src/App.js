import React from 'react'
import color from './seedColor'
import Palette from './Palette'
function App() {
  return (
    <div>
     <Palette {...color[3]}/>
    </div>
  );
}

export default App;
