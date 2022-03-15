import React from 'react';
import Spinner from "react-bootstrap/Spinner";
import { GET_BOX } from '../util/queries';
import { REMOVE_ITEM } from '../util/mutations';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';

import { useParams } from 'react-router-dom';

const ItemList = () => {
  const { boxId } = useParams();
  const {loading, data, err} = useQuery(GET_BOX, {
    variables: { boxId },
  });
  
  const [removeItem, removeItemState] = useMutation(REMOVE_ITEM);

  const handleDeleteItem = (itemId) => {
    removeItem({
      variables: {
        boxId,
        itemId
      },
      refetchQueries: [GET_BOX]
    });
  }

  const items = data?.box.items;

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
                <p className="card-body">{item.itemTitle}</p>
                <p className='card-body'>{item.itemCode}</p>
                <p className='card-body'>{item.itemLink}</p>
                <button
                onClick={() => handleDeleteItem(item._id)}
                className='btn btn-light'
                disabled={removeItemState.loading}>{removeItemState.loading?<> <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Loading...</span></>:<><span className="visually-hidden">Delete Item</span>🗑</>}</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ItemList;
