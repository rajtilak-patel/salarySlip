import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const logo = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdqMPufcNl4GLjK2qOvnUoijYbcJWZ95nO6Q&usqp=CAU`
  return (
    // <nav classNameName="navbar navbar-expand-lg navbar-dark bg-dark">
    //   <Link classNameName="navbar-brand" to="/">
    //     <img src={logo} width="30" height="30" classNameName="d-inline-block align-top mx-3" alt="logo" />
    //     My App
    //   </Link>
    //   {/* <button
    //     classNameName="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarNav"
    //     aria-controls="navbarNav"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span classNameName="navbar-toggler-icon"></span>
    //   </button> */}
    //   <div classNameName=" navbar" id="navbarNav">
    //     <ul >
    //       <li >
    //         <Link classNameName="nav-link" to="/">
    //           Home
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
       <Link classNameName="navbar-brand" style={{listStyle:"none",color:"white"}} to="/">
         <img src={logo} width="30" height="30" classNameName="d-inline-block align-top mx-3" alt="logo" />
        My Salary Slip
      
      </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav " >
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
      </div>
       </div>
     </div>
   </nav>
  );
};

export default Navbar;
