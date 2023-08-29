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
  const [Amount, setAmount] = useState('2');

  const amountValue = Number(Amount) || 0;

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
          value={Amount}
          onChange={(e) => setAmount((e.target.value))}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(amountValue))}
        >
          + {Amount}
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(decrementByAmount(amountValue))}
        >
          - {Amount}
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(divideByAmount(amountValue))}
        >
          / {Amount}
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(multiplyByAmount(amountValue))}
        >
          * {Amount}
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(set(amountValue))}
        >
          {Amount}
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
