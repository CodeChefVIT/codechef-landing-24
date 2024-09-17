
import React from "react";
import Image from "next/image";
import { nav } from "@/lib/navicons";

const Navbar = () => {
  return (
    <div className="container">
      <div className="component">
        <button className="cn-button" id="cn-button">
          +
        </button>
        <div className="cn-wrapper" id="cn-wrapper">
          <ul>
          <li>
  <a href="#">
    <span className="fa fa-gear"></span>
  </a>
</li>
<li>
  <a href="#">
    <span className="fa fa-headphones"></span>
  </a>
</li>
<li>
  <a href="#">
    <span className="fa fa-home"></span>
  </a>
</li>
<li>
  <a href="#">
    <span className="fa fa-video"></span>
  </a>
</li>
<li>
  <a href="#">
    <span className="fa fa-envelope"></span>
  </a>
</li>
          </ul>
        </div>
        <div id="cn-overlay" className="cn-overlay"></div>
      </div>
    </div>
  );
};


// import React from "react";
// import { nav } from "@/lib/navicons";

// const Navbar = () => {
//   return (
//     <div className="container">
//       <div className="component">
//         <button className="cn-button" id="cn-button">
//           +
//         </button>
//         <div className="cn-wrapper" id="cn-wrapper">
//           <ul>
//             <li>
//               <a href="#">
//                 <img src={nav.grid} alt="grid icon" style={{ width: "30px", height: "30px", backgroundColor: "black" }} />
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <img src={nav.home} alt="home icon" style={{ width: "30px", height: "30px", backgroundColor: "black" }} />
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <img src={nav.list} alt="list icon" style={{ width: "30px", height: "30px", backgroundColor: "black" }} />
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <img src={nav.message} alt="message icon" style={{ width: "30px", height: "30px", backgroundColor: "black" }} />
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <img src={nav.user} alt="user icon" style={{ width: "30px", height: "30px", backgroundColor: "black" }} />
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="cn-overlay" className="cn-overlay"></div>
//       </div>
//     </div>
//   );
// };


export default Navbar;