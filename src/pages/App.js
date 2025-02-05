import '../App.css';
import { useState } from 'react';

function App() {
  const[ counter, setCounter] = useState(0);

  const add =()=>{
    const addedNumber = counter + 1
    setCounter(addedNumber)
  }
  return (
    <div className='App'>
      <button onClick={add}>+</button>
      <p>{counter}</p>
      <button onClick={()=> setCounter((count) => {
      if(count >= 1){
        return count - 1;
      }
      return count;
    })}>-</button>
    </div>
    
  );
}

export default App;
