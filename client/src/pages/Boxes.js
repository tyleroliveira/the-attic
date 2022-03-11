import { useAuth } from "../util/auth";

export default function Home() {
  const { isLoggedIn, user } = useAuth();
  return (
    <>
    <div>
      {/* TODO: display logged in user's username */}
      <p>
        install
      </p>
      <p>
        logout
      </p>
      <h1>YOUR ATTIC</h1>
      <hr />
<button type="submit">
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
