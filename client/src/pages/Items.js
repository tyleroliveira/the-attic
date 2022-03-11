import React from 'react';

// import { useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

import ItemList from '../components/ItemList';
import NewItemForm from '../components/NewItemForm';

// import { QUERY_ITEMS } from '../utils/queries';

const Items = () => {
    // const {loading, data} = useQuery(QUERY_ITEMS);
    // const items = data?.items || [];


  return (
    <main>
        <h3
        className="p-5 display-inline-block"
      >
        JavaScript
      </h3>
        <button
        onClick={
            <NewItemForm />
        }
        >
            + NEW ITEM
        </button>
      <div className="col-12 col-md-8 mb-3">
          <ItemList
          />
      </div>
  </main>
  )}

export default Items;