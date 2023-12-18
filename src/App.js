
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [advice, setAdvice] =useState("");
  useEffect(()=> {
    getAdvice()
  }, [])

  const getAdvice = async() => {
    const response = await fetch (`http://www.boredapi.com/api/activity/`);
    const data = await response.json();
    setAdvice(data.activity);
        }
  return (
    <div className="App">
      <h1>What to do....?</h1>
      <p>{advice}</p>
      <button onClick={getAdvice}>Fetch an idea</button>
    </div>
  );
}

export default App;
