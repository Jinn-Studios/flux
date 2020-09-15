import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { RootState } from './redux';
import { store } from './redux'
import { decrement, increment, reset } from './redux/count/actions';

const App: React.FC = () => {
  const { count } = useSelector((state: RootState) => state.count);

  const incrementCount = () => store.dispatch(increment())
  const decrementCount = () => store.dispatch(decrement())
  const resetCount = () => store.dispatch(reset())

  return (
    <div className="App">
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={resetCount}>reset</button>
    </div>
  );
}

export default App;
