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
    backgroundColor: "#F6F6F6",
    color: "black",
    borderRadius: "15px",
  },
  itemsList: {
    margin: "auto",
    width: "66.66666667%",
  }
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
      <div
      style={styles.itemsList}>
      <ItemList />
      </div>
  </main>
  )}

export default Items;