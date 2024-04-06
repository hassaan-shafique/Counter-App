import './App.css';


function App() {
 
   
  return (
    <div className='main'>
    <h1 className='heading'>Counter App</h1>
      <div className="main-card">
        <div className="h1-part">
          <h1>1</h1>
        </div>
        <div className="button-container">
          <button className="green">Increment</button>
          <button className="red">Decrement</button>
        </div>
        <div className='reset'>
        <button className='reset-1'> Reset</button> 
        </div>
      </div>
    </div>
  );
}

export default App;
