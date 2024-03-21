// import "./pagestyle.css";
// import "./background.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function Navbar() {
//   return (
//     <>
//       <div className="ripple-background">
//         <div className="circle xxlarge shade1"></div>
//         <div className="circle xlarge shade2"></div>
//         <div className="circle large shade3"></div>
//         <div className="circle mediun shade4"></div>
//         <div className="circle small shade5"></div>
//       </div>
//       <nav>
//         <div class="bank-containers">
//           <ul>
//             <li>
//               {" "}
//               <img
//                 src="https://gardnerma.com/wp-content/uploads/2021/11/Avidia-Bank-Logo.png"
//                 style={{ width: "25%" }}
//               />
//             </li>
//             <li>
//               <a href="#/home/" id="signin_link">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#/login/">Create Account</a>
//             </li>
//             <li class="nav-item">
//               <a href="#/deposit/">Deposit</a>
//             </li>
//             <li class="nav-item">
//               <a href="#/withdraw/">Withdraw</a>
//             </li>
//             <li class="nav-item">
//               <a href="#/alldata/">All Data</a>
//             </li>
//           </ul>
//         </div>
//
//       </nav>
//     </>
//   );
// }

import { useState } from "react";
import "./pagestyle.css";
import "./background.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <>
      <div className="ripple-background">
        <div className="circle xxlarge shade1"></div>
        <div className="circle xlarge shade2"></div>
        <div className="circle large shade3"></div>
        <div className="circle mediun shade4"></div>
        <div className="circle small shade5"></div>
      </div>
      <nav className="navbar navbar-expand-lg ">
        <div className="bank-containers">
          <a>
            <img
              // src="https://gardnerma.com/wp-content/uploads/2021/11/Avidia-Bank-Logo.png"
              style={{ width: "25%" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <FaBars />
          </button>
          <div
            className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li>
                <a href="#/home/" id="signin_link">
                  Home
                </a>
              </li>
              {/* <li>
                <a href="#/create/">CreateAccount</a>
              </li> */}
              <li>
                <a href="#/login/">Login</a>
              </li>
              <li class="nav-item">
                <a href="#/deposit/">deposit</a>
              </li>
              <li class="nav-item">
                <a href="#/withdraw/">Withdraw</a>
              </li>
              <li class="nav-item">
                <a href="#/alldata/">All Data</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
