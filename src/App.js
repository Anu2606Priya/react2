
import React from 'react'
import Next from './Next';
import Source from './Source';


function App() {
 const value = "This is my react app component"
  return (
    <div className='App'>
      <Next data={value}/>
      <Source data={value}/>
    </div>
  );
}

export default App;
