import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
  divideByAmount,
  multiplyByAmount,
  set,
  reset,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          type='number'
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount((e.target.value))}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          + {incrementAmount}
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(decrementByAmount(incrementValue))}
        >
          - {incrementAmount}
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(divideByAmount())}
        >
          / {incrementAmount}
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(multiplyByAmount())}
        >
          * {incrementAmount}
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(set(incrementAmount))}
        >
          {incrementAmount}
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(reset())}
        >
          0
        </button>
      </div>
    </div>
  );
}
