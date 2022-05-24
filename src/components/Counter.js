import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector(state=>state.counter.toggle);


  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  const decrementHandler = ()=>{
    dispatch(counterActions.decrement());
  };
  const increaseHandler = ()=>{
    dispatch(counterActions.increase(5));
  };
  const incrementHandler = ()=>{
    dispatch(counterActions.increment());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show &&  <div className={classes.value}>{counter}</div>}
      <button onClick={increaseHandler}>Increase by 5</button>
      <button onClick={incrementHandler}>increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
