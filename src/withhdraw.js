import "./pagestyle.css";
import "./background.css";
import { useState, useContext } from "react";
import UserContext from "./context";

export default function Withdraw() {
  const ctx = useContext(UserContext);
  const [withdraw, setWithdraw] = useState("");
  var leng = ctx.users.length;
  var balAnce = leng > 0 ? ctx.users[leng - 1].balance : 0;
  const [availablebal, setAvailableBal] = useState(balAnce);
  var message = `Account Balance : ${availablebal}`;
  
  // Check if user is logged in
  if (ctx.users.length === 0) {
    return <div>You need to login to withdraw</div>;
  }

  // form validation
  function validate(field) {
    if (isNaN(field)) {
      alert("Please Enter Valid Number");
      return false;
    }
    if (field <= 0) {
      alert(" Please Enter a Value greater than zero");
      return false;
    }
    if (field > balAnce) {
      alert("You don't have enough Balance to Withdraw");
      return false;
    }
    return true;
  }

  function handlewithdraw() {
    if (!validate(withdraw)) return;
    var Money = balAnce - withdraw;
    setAvailableBal(Money);
    ctx.users[leng - 1].balance = Money;

    alert("Successfully Withdraw ₹" + withdraw);
    setWithdraw("");
  }

  return (
    <html>
      <div className="login-box">
        <center>
          <h3 id="backgrounds">Withdraw</h3>
        </center>
        <b>
          <div className="balance">
            <h3>{message}</h3>
          </div>
        </b>
        <br />
        <b>
          <form>
            <div className="user-box">
              <input
                style={{ color: "black" }}
                type="number"
                value={withdraw}
                placeholder="Enter the amount to be Withdraw"
                onChange={(e) => setWithdraw(Number(e.target.value))}
              ></input>
            </div>

            <a onClick={handlewithdraw}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <b>
                {" "}
                <b> Withdraw</b>
              </b>
            </a>
          </form>
        </b>
      </div>
    </html>
  );
}
