import './App.css';
import { useState } from "react";



function App() {
  const [num, setNum] = useState(0);
  const initialCount =0;
  
  const handleincrement = () => {
    setNum(num +1) ;
  }
  const handledecrement = () => {
    if (num >0) {
    setNum(num - 1);
    }
    else {
      alert("you have reached to zero ");
      setNum(0);
      
    }
    
    
  };

 const handlerest = () =>{
 setNum (initialCount);
 }
   
  return (
    <div>
      <div>
        <p> {num}</p>
        <div>
          <button className="increment " onClick={handleincrement}>
           
            Increment
          </button>
          <button className="decrement " onClick={handledecrement}>
           
            Decrement
          </button>
          <button className="decrement " onClick={handlerest}>
            
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
