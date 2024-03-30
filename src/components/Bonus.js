import React from "react";
import { incrementBonus } from "../actions";
import { useDispatch, useSelector } from "react-redux";

function Bonus() {
  //   const [bonus, setBonus] = useState({ points: 0 });

  //   const increment = () => {
  //     setBonus({ points: bonus.points + 1 });
  //   };

  const points = useSelector((state) => state.bonus.points);
  const amount = useSelector((state) => state.account.amount);

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h4>Bonus Component</h4>
        <h3>Total points : {points}</h3>
        <h3>Total amount : ₹{amount}</h3>
        <button onClick={() => dispatch(incrementBonus())}>Increment + </button>
      </div>
    </div>
  );
}

export default Bonus;
