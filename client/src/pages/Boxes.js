import React from "react";
import { useQuery } from '@apollo/client';
import NewBoxForm from "../components/NewBoxForm";
import { useAuth } from "../util/auth";

import BoxList from "../components/BoxList";

import { GET_BOXES } from '../util/queries';

export default function Home() {
  const { logout } = useAuth();
  const {boxes} = useQuery(GET_BOXES)
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
              boxes={boxes}

            />
      </div>
    </>
  );
}
