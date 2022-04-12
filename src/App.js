import './App.css'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from './redux/counter'

 function App(){
  const { count } = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return(
    <div >
      <h1>your count is: {count}</h1>
      <button onClick={()=> dispatch(increment())}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
      <button onClick={()=> dispatch(incrementByAmount(22))}>22</button>
    </div>
  );
}

export default App;