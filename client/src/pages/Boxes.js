import React from "react";
import NewBoxForm from "../components/NewBoxForm";
import { useAuth } from "../util/auth";
import BoxList from "../components/BoxList";
export default function Home() {
  const { logout } = useAuth();  
  return (
    <>
      <div>
        <button className="btn btn-dark">INSTALL</button>
        <button className="btn btn-dark" onClick={logout}>
          LOGOUT
        </button>
        <h1>YOUR ATTIC</h1>
        <hr />
        <h2>  
          +NEW BOX
        </h2>
        <div>
        <NewBoxForm/>
        </div>
        <BoxList
        />
      </div>
    </>
  );
}
