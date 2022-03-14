import React, { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { useAuth } from "../util/auth";

// This signup form is intentionally minimalist to reduce effort required to
// customize it to your app's needs. See the excellent best practices guide for
// sign informs on web.dev https://web.dev/sign-in-form-best-practices/

// TODO: customize styles or import styles with favorite css approach
const styles = {
  h1: {
    textAlign: "center",
  },
  formControl: {
    display: "flex",
    padding: "0.25em",
    justifyContent: "center",
  },
  formDiv: {
    textAlign: "center",
    backgroundColor: "white",
    display: "block",
  }
};

const initialFormState = {
  email: "",
  password: "",
};

export default function Login() {
  const { isLoggedIn, login, loading, error } = useAuth();
  const [formState, setFormState] = useState(initialFormState);
  

  useEffect(() => {
    if (error) {
      // TODO: replace window alert with custom alert
      alert(error);
    }
  }, [error]);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    login(formState);
  };

  if (isLoggedIn) {
    // navigate to page user was redirected from or the home page.
    return <Navigate to="/boxes"/>
  }

  return (
  <div>
    <h1 style={styles.h1}>THE ATTIC</h1>
    <div style={styles.formDiv}>
      <h2>LOGIN..</h2>
      <form 
      onSubmit={handleSubmit}>
        <div style={styles.formControl}>
          <input
            disabled={loading}
            id="email"
            type="email"
            name="email"
            placeholder="Enter email"
            value={formState.email.value}
            onChange={handleInputChange}
          />
        </div>
        <div style={styles.formControl}>
          <input
            disabled={loading}
            id="new-password"
            type="password"
            name="password"
            placeholder="Enter password"
            value={formState.password.value}
            onChange={handleInputChange}
          />
        </div>
        <div style={styles.formControl}>
          <button className="btn btn-dark" disabled={loading} type="submit">
            {loading ? "Loading..." : "LOGIN"}
          </button>
        </div>
        <button>
        <Link className="btn btn-dark" to="/signup">
          not a user?➡️
          </Link>
        </button>
      </form>
    </div>
  </div>
  );
}
