import './App.css';
import { useState } from 'react';

function App() {
  const [state, setState] = useState(0);

  const handleIcre = () => {
    setState(state + 1);
  };

  const handleDecr = () => {
    setState(state - 1);
  };

  return (
    <>
      <p> {state || '-'} </p>
      <button onClick={handleIcre}>Count +</button>
      <button onClick={handleDecr}>Count -</button>
    </>
  );
}

export default App;
