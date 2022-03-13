import React from "react";
import { useAuth } from "../util/auth";

export default function Home() {
  const { logout } = useAuth();
  return (
    <>
      <div>
        <button className="btn btn-dark">INSTALL</button>
        <button className="btn btn-dark" onClick={logout}>
          Logout
        </button>
        <h1>YOUR ATTIC</h1>
        <hr />
        <button className="btn btn-dark" type="submit">
          + NEW BOX
        </button>
        <button>JavaScript</button>
      </div>
      <div>
        <button>terminal commands</button>
        <button>Docs Links</button>
      </div>
      <div>
        <button>GIt commands</button>
        <button>graph sql syntax</button>
      </div>
    </>
  );
}
