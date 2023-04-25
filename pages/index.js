import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { doIncrement, doDecrement } from '../src/store/actions/CounterActions'
export default function Home() {
   const count = useSelector(state => state.CounterReducer.count);
   const dispatch = useDispatch();
   const decrementHandler = () => {
    dispatch(doDecrement(5))
}

const incrementHandler = () => {
    dispatch(doIncrement(5))
}
  console.log(count);
  return (
    <>
         <h1>Counter App</h1>
        <button onClick={decrementHandler}>-</button>
        <span style={{ padding: 10 }}>{count}</span>
        <button onClick={incrementHandler}>+</button>
    </>
      )
}
