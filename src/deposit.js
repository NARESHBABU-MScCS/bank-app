import "./pagestyle.css";
import "./background.css";
import { useState, useContext } from "react";
import UserContext from "./context";

export default function Deposit() {
  const ctx = useContext(UserContext);
  const [deposit, setDeposit] = useState("");
  var leng = ctx.users.length;
  var balAnce = leng > 0 ? ctx.users[leng - 1].balance : 0;
  const [availablebal, setAvailableBal] = useState(balAnce);
  const [show, setShow] = useState(true);
  var message = `Account Balance : ${availablebal}`;
  
  // Check if user is logged in
  if (ctx.users.length === 0) {
    return <div>You need to login to deposit</div>;
  }

  // form validation
  function validate(field) {
    if (isNaN(field)) {
      alert("Please Enter Valid Number");
      return false;
    }
    if (Number(field) <= 0) {
      alert(" Please Enter a Value greater than zero");
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (!validate(deposit)) return;
    var Money = balAnce + Number(deposit);
    setAvailableBal(Money);
    ctx.users[leng - 1].balance = Money;
    setShow(false);
    alert("Successfully Deposited ₹" + deposit);
    setDeposit("");
  }
  
  return (
    <html>
      <div className="login-box">
        <center>
          <h1 id="backgrounds">Deposit</h1>
        </center>
        <b>
          <div className="balance">
            <h3>{message}</h3>
          </div>
        </b>
        <br />

        <form>
          <div className="user-box">
            <input
              style={{ color: "black" }}
              type="number"
              value={deposit}
              placeholder="Enter the amount to be Deposited"
              onChange={(e) => setDeposit(Number(e.target.value))}
            ></input>
          </div>

          <a onClick={handleCreate}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <b>
              <b>
                {" "}
                <b> Deposit</b>
              </b>
            </b>
          </a>
        </form>
      </div>
    </html>
  );
}
