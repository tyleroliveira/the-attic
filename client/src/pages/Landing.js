import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../util/auth";

const styles = {
  btn: {
    width: "100%",
    margin: "4px",
    padding: "8px"
  },
  div: {
    textAlign: "center", 
    margin: "auto", 
    padding: "25px", 
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white", 
    borderRadius: "10px"
  },
  h1: {
    fontSize: "70px", 
    textAlign: "center",
    color: "white",
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }
}
export default function Landing() {
  const { isLoggedIn, logout } = useAuth();
  return (
    <div>
          <h1 style={styles.h1}>
            THE ATTIC
          </h1>
          <div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
          <div style={styles.div}>
          <p style={{fontSize: "20px", lineHeight: "1.3", fontWeight: "bold"}}>
            A PLACE TO LEAVE THE CODE YOU CAN'T FORGET          
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
          <>
          <Link 
            style={styles.btn}
            className="btn btn-dark" 
            to="/login"
            >
            LOGIN
          </Link>
          </>
          <br />
          <>
          <Link 
            style={styles.btn}
            className="btn btn-dark" 
            to="/signup"
            >
            SIGNUP
          </Link>
          </>
      </>
      )}
          </div>
      </div>
)
}


