import React from 'react';
import { GET_ITEMS } from '../util/queries';
import { useQuery } from '@apollo/client';

const ItemList = () => {
  const { loading, data, err } = useQuery(GET_ITEMS);
  const items = data?.me.boxes.items;
  console.log(items);
  
  if (!items) {
    return <h3>No items Yet</h3>;
  }

  return (
    <div>
      <h3
        className="p-5 display-inline-block"
      >
        ITEMS
      </h3>
      <div className="flex-row my-4">
        {items &&
          items.map((item) => (
            <div key={item._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <p className="card-body">{item.itemText}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ItemList;
