import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header className="nav">
        <Link to="/">
          <h3 className="logo">
            {<span className="highlight">Note</span>} App
          </h3>
        </Link>
        <ul className="nav__links">
          <li className="nav__item">
            <Link className="nav__link" to="/notes">
              Notes
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/about-us">
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/contact-us">
              Contact
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;

// const Header = (props) => {
//   const { name } = props;
//   console.log(props);
//   return (
//     <header className="header">
//       <h3>
//         {/* <span>N</span>oteTaking */}
//         {name}
//       </h3>
//       <ul>
//         <li>
//           <a href="#">Notes</a>
//         </li>
//         <li>
//           <a href="#">ABout</a>
//         </li>
//         <li>
//           <a href="#">Contact</a>
//         </li>
//       </ul>
//     </header>
//   );
// };
