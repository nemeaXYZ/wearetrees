import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(1);
  const [lumberjackAmount, incrementLumberjacksAmount] = useState(0);
  const [chainsawAmount, incrementChainsawAmount] = useState(0);
  const [loggingtruckAmount, incrementLoggingtruckAmount] = useState(0);
  const [tunguskaAmount, incrementTunguskaAmount] = useState(0);

  return (
    <div>
      <div className={styles.row}>
        {/*

        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
              */}
        <span className={styles.value}>{count} </span>
        <span>Trees Harvested</span>
        {/*

        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
              */}
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Harvest Trees
        </button>
      </div>
      <div className={styles.row}>
        <label>Trees per Click</label>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
        />
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={(e) => {
            setIncrementAmount(incrementAmount + 2);
            incrementLumberjacksAmount(lumberjackAmount + 1);
          }}
        >
          Hire Lumberjack
        </button>
        <span className={styles.value}>{lumberjackAmount} </span>
        <span>Hired Lumberjacks</span>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={(e) => {
            setIncrementAmount(incrementAmount + 5);
            incrementChainsawAmount(chainsawAmount + 1);
          }}
        >
          Buy Chainsaw
        </button>
        <span className={styles.value}>{chainsawAmount} </span>
        <span>Purchased Chainsaws</span>
        {/*
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
              */}
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={(e) => {
            setIncrementAmount(incrementAmount + 10);
            incrementLoggingtruckAmount(loggingtruckAmount + 1);
          }}
        >
          Buy Logging Truck
        </button>
        <span className={styles.value}>{loggingtruckAmount} </span>
        <span>Logging Trucks</span>
        {/*
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
              */}
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={(e) => {
            setIncrementAmount(incrementAmount * 100000000);
            incrementTunguskaAmount(tunguskaAmount + 1);
          }}
        >
          Commission Tunguska-Class Orbital Kinetic Strike Facility
        </button>
        <span className={styles.value}>{tunguskaAmount} </span>
        <span>Tunguska Strike Groups</span>
        {/*
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
              */}
      </div>
    </div>
  );
}
