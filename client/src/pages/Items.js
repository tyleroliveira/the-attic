import React from 'react';

import ItemList from '../components/ItemList';
import NewItemForm from '../components/NewItemForm';
import { useAuth } from "../util/auth";
import { Link } from 'react-router-dom';

const styles = {
  formDiv: {
    display: "block",
    margin: "auto",
    padding: "20px",
    width: "350px",
    backgroundColor: "black",
    color: "white",
  },
}

const Items = () => {
    const { logout } = useAuth();

  return (
    <main>
    <Link to="/boxes" className="btn btn-dark">
      YOUR ATTIC
    </Link>
    <button 
      className="btn btn-dark" 
      onClick={logout}>
          LOGOUT
    </button>
    <div
    style={styles.formDiv}>
      <NewItemForm />
    </div>
      <div className="col-12 col-md-8 mb-3">
      <ItemList />
      </div>
  </main>
  )}

export default Items;