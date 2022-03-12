import React from "react";
import { useAuth } from "../util/auth";

export default function Home() {


  return (
    <>
    <div>
      {/* TODO: display logged in user's username */}
      <button className="btn btn-dark">
        INSTALL
      </button>
      <button className="btn btn-dark">
        LOGOUT
      </button>
      <h1>YOUR ATTIC</h1>
      <hr />
<button className="btn btn-dark" type="submit">
            + NEW BOX
          </button>
          <button>
            JavaScript
          </button>
    </div>
    <div>
    <button>
            terminal commands
          </button>
          <button>
            Docs Links
          </button>
    </div>
    <div>
    <button>
            GIt commands
          </button>
          <button>
            graph sql syntax
          </button>
    </div>
    </>
  );
}
