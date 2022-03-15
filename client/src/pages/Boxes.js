import React from "react";
import NewBoxForm from "../components/NewBoxForm";
import { useAuth } from "../util/auth";
import BoxList from "../components/BoxList";
const styles = {
  h1: {
    textAlign: "center",
    paddingTop: "1.5em",
    margin: "10px",
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
    width: "90%",
    margin: "10px",
  }
};
export default function Home() {
  const { logout } = useAuth();  
  return (
    <>
      <div style={styles.h1}>
        <button className="btn btn-dark">INSTALL</button>
        <button className="btn btn-dark" onClick={logout}>
          LOGOUT
        </button>
        <h1
        style={styles.h1}
        >YOUR ATTIC</h1>
        <hr />
        <div className="btn-box" >
        <h2>  
        +NEW BOX
        </h2>
        <div
        style={styles.formControl}
        >
        <NewBoxForm/>
        </div>
        </div>
        <BoxList
        />
      </div>
    </>
  );
}
