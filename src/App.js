import { useSelector } from "react-redux";
import "./App.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";

function App() {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
  const account = useSelector((state) => state.account);
  return (
    <div className="App-header">
      <header>App</header>
      {account.pending ? (
        <p>Loading..</p>
      ) : account.error ? (
        <p>Error!!! {account.error}</p>
      ) : (
        <h2>Current Amount : ₹{amount}</h2>
      )}

      <h2>Total Bonus : {points}</h2>

      <Account />
      <Bonus />
    </div>
  );
}

export default App;
