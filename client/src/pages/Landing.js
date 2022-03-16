import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../util/auth";
import background from "../img/the-attic.png";
// import { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../util/auth";

// This signup form is intentionally minimalist to reduce effort required to
// customize it to your app's needs. See the excellent best practices guide for
// sign informs on web.dev https://web.dev/sign-in-form-best-practices/

// TODO: customize styles or import styles with favorite css approach

export default function Landing() {
  const { isLoggedIn, logout } = useAuth();
  return (
        <div style={{backgroundImage: `url(${background})`,backgroundRepeat: 'no-repeat',height:"920px",width:"1849px", textAlign: "center", margin: "auto"}}>
          <div style={{height:"200px",width:"1849px",}}>
          </div>
          <h1 style={{fontSize: "65px"}}>
            THE ATTIC
          </h1>
          <p style={{fontSize: "25px"}}>
            LEAVE YOUR CODE HERE, 
            WE PROMISE ITS SAFE WITH US...
          </p>
          {isLoggedIn ? (
      <>
        <Link to="/boxes" className="btn btn-dark">
          My Boxes
        </Link>
        <button className="btn btn-dark" onClick={logout}>
          Logout
        </button>
      </>
    ) : (
      <>
          <button>
          <Link className="btn btn-dark" to="/login">
            LOGIN
          </Link>
          </button>
          <button>
          <Link className="btn btn-dark" to="/signup">
            SIGNUP
          </Link>
          </button>
      </>
      )}
      </div>
)
}


