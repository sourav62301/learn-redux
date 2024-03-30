import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  getUserAccount,
  increment,
  incrementByAmount,
} from "../actions";

function Account() {
  //   const [account, setAccount] = useState({ amount: 0 });
  const [value, setValue] = useState(0);

  //   const increment = () => {
  //     setAccount({ amount: account.amount + 1 });
  //   };
  //   const decrement = () => {
  //     setAccount({ amount: account.amount - 1 });
  //   };

  //   const incrementByAmount = (value) => {
  //     setAccount({ amount: account.amount + value });
  //   };

  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="conatiner">
        <h4>
          <b>Account Component</b>
        </h4>
        <h3>Amount : ₹{amount}</h3>
        <h3>Points : {points}</h3>
        <button onClick={() => dispatch(increment())}>Increment +</button>
        <button onClick={() => dispatch(decrement())}>Decrement -</button>
        <input type="text" onChange={(e) => setValue(+e.target.value)} />
        <button onClick={() => dispatch(incrementByAmount(value))}>
          Increment By Value
        </button>
        <button onClick={() => dispatch(getUserAccount(1))}>
          Initialize Account
        </button>
      </div>
    </div>
  );
}

export default Account;
