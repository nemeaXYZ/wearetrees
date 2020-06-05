import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  //decrement,
  //increment,
  incrementByAmount,
  setIncrementAmount,
  //incrementAsync,
  selectCount,
  selectIncrement,
} from "./counterSlice";
import {
  incrementLumberjackByAmount,
  selectLumberjack,
} from "../lumberjack/lumberjackSlice";
import {
  incrementChainsawByAmount,
  selectChainsaw,
} from "../chainsaw/chainsawSlice";
import {
  incrementLoggingTruckByAmount,
  selectLoggingTruck,
} from "../loggingTruck/loggingTruckSlice";
import {
  incrementTunguskaByAmount,
  selectTunguska,
} from "../tunguska/tunguskaSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector(selectCount);
  const incrementAmount = useSelector(selectIncrement);
  const lumberjackAmount = useSelector(selectLumberjack);
  const chainsawAmount = useSelector(selectChainsaw);
  const loggingTruckAmount = useSelector(selectLoggingTruck);
  const tunguskaAmount = useSelector(selectTunguska);
  const dispatch = useDispatch();
  //const [incrementAmount, setIncrementAmount] = useState(1);
  //const [lumberjackAmount, incrementLumberjacksAmount] = useState(0);
  //const [chainsawAmount, incrementChainsawAmount] = useState(0);
  //const [loggingtruckAmount, incrementLoggingtruckAmount] = useState(0);
  //const [tunguskaAmount, incrementTunguskaAmount] = useState(0);

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
          readOnly
        />
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={(e) => {
            dispatch(incrementLumberjackByAmount(Number(1) || 0));
            dispatch(setIncrementAmount(Number(2) || 0));
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
            dispatch(incrementChainsawByAmount(Number(1) || 0));
            dispatch(setIncrementAmount(Number(5) || 0));
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
            dispatch(incrementLoggingTruckByAmount(Number(1) || 0));
            dispatch(setIncrementAmount(Number(10) || 0));
          }}
        >
          Buy Logging Truck
        </button>
        <span className={styles.value}>{loggingTruckAmount} </span>
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
            dispatch(incrementTunguskaByAmount(Number(1) || 0));
            dispatch(setIncrementAmount(Number(80000000) || 0));
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
