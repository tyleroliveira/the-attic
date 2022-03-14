import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../util/auth";

// This signup form is intentionally minimalist to reduce effort required to
// customize it to your app's needs. See the excellent best practices guide for
// sign informs on web.dev https://web.dev/sign-in-form-best-practices/

// TODO: customize styles or import styles with favorite css approach
const styles = {
  h1: {
    textAlign: "center",
    paddingTop: "1.5em",
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
    width: "100%",
  }
};

const initialFormState = {
  email: "",
  password: "",
};

export default function SignUp() {
  const { isLoggedIn, signup, loading, error } = useAuth();
  const [formState, setFormState] = useState(initialFormState);

  useEffect(() => {
    if (error) {
      // TODO: replace window alert with custom alert.
      alert(error);
    }
  }, [error]);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    signup(formState);
  };

  if (isLoggedIn) {
    // navigate to the Boxes page
    return <Navigate to="/Boxes" replace />
  }
  return (
    <div>
      <h1 
    style={styles.h1}
    >THE ATTIC
    </h1>
    <div style={styles.formDiv}>
      <form onSubmit={handleSubmit}>
        <div style={styles.formControl}>
        </div>
        <div style={styles.formControl}>
          <input
            className="form-control"
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
            className="form-control"
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
          <button 
          className="btn btn-dark"
          style={styles.btn}
          disabled={loading} 
          type="submit">
            {loading ? "Loading..." : "SIGNUP"}
          </button>
        </div>
        <div style={styles.formControl}>
          <Link 
          className="btn btn-dark" 
          to="/login"
          style={styles.btn}>
          already a user?➡️
          </Link>
        </div>
      </form>
    </div>
    </div>
  );
}
