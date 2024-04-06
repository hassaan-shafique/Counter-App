import './App.css';
import { useState } from 'react';



function App() {
  const [num ,setNum] = useState(0);
 

  const handleincrement = () =>{
    setNum (num +1);
  }
  const handledecrement =() =>{
    if (num> 0) {
    setNum(num -1);
    }
    else{
      alert("you have reached to the initial value");
      setNum(0);
    }
  } 
  const handlereset =() => {
     
      setNum (0);
     
  }
   
  return (
    <div className='main'>
    <h1 className='heading'>Counter App</h1>
      <div className="main-card">
        <div className="h1-part">
          <h1>{num}</h1>
        </div>
        <div className="button-container">
          <button className="green" onClick={handleincrement}>Increment</button>
          <button className="red" onClick={handledecrement}>Decrement</button>
        </div>
        <div className='reset'>
        <button className='reset-1' onClick={handlereset}> Reset</button> 
        </div>
      </div>
    </div>
  );
}

export default App;
