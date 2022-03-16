import React from "react";
import NewBoxForm from "../components/NewBoxForm";
import { useAuth } from "../util/auth";
import BoxList from "../components/BoxList";
const styles = {
  h1: {
    textAlign: "center",
    margin: "10px",
    fontSize: "65px"
  },
  formControl: {
    display: "flex",
    padding: "0.4em",
    justifyContent: "center",
  },
  formDiv: {
    display: "block",
    margin: "auto",
    width: "350px",
  },
  input: {
    backgroundColor: "white",
    borderRadius: "3px",
    display: "inline-block",
  },
  btn: {
    margin: "20px",
    padding: "10px"
  }
};
export default function Home() {
  const { logout } = useAuth();  
  return (
    <>
      <div>
        {/* <button 
        className="btn btn-dark"
        style={styles.btn} 
        >INSTALL</button> */}
        <button 
        className="btn btn-dark" 
        style={styles.btn}
        onClick={logout}>
          LOGOUT
        </button>
        <h1
        style={styles.h1}
        >YOUR ATTIC</h1>
        <div
        className="btn-box"
        style={styles.formControl}
        >
          <h2>  
          +NEW BOX
          </h2>
        <NewBoxForm/>
        </div>
        <BoxList
        />
      </div>
    </>
  );
}
