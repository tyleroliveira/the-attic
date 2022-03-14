import React from 'react';

// import { useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

import ItemList from '../components/ItemList';
import NewItemForm from '../components/NewItemForm';
import { useAuth } from "../util/auth";
import { Link } from 'react-router-dom';

// import { QUERY_ITEMS } from '../utils/queries';

const Items = () => {
    // const {loading, data} = useQuery(QUERY_ITEMS);
    // const items = data?.items || [];
    const { logout } = useAuth();



  return (
    <main>
          <Link to="/boxes" className="btn btn-dark">
      YOUR ATTIC
    </Link>
                  <button className="btn btn-dark" onClick={logout}>
          LOGOUT
        </button>
        <h3
        className="p-5 display-inline-block"
      >
        JavaScript
      </h3>


            <NewItemForm />


 
      <div className="col-12 col-md-8 mb-3">
          <ItemList
          />
      </div>
  </main>
  )}

export default Items;