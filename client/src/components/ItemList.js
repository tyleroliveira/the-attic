import React from 'react';
import Spinner from "react-bootstrap/Spinner";
import { Card } from 'react-bootstrap';
import { GET_BOX } from '../util/queries';
import { REMOVE_ITEM } from '../util/mutations';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';

import { useParams } from 'react-router-dom';

const styles = {
  h2: {
    textAlign: "center",
    padding: "10px",
  },
  singleItem: {
    backgroundColor: "white",
    borderRadius: "15px",
    margin: "auto"
  }
}

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
      <h2
        style={styles.h2}>
        {data?.box.title}
      </h2>
      <div 
      className="flex-row my-4"
      style={styles.singleItem}>
        {items &&
          items.map((item) => (
            <Card 
              key={item._id} 
              className="col-12 mb-3 pb-3">
              <Card.Body>
                <Card.Header as="h5">{item.itemTitle}</Card.Header>
                <Card.Body>
                <pre>
                <code>{item.itemCode}</code>
                </pre>
                <Card.Body>
                <Card.Link href={item.itemLink} className='card-body'>{item.itemLink}</Card.Link>
                </Card.Body>
                <button
                onClick={() => handleDeleteItem(item._id)}
                className='btn btn-dark'
                disabled={removeItemState.loading}>{removeItemState.loading?<> <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Loading...</span></>:<><span className="visually-hidden">Delete Item</span>delete item</>}</button>
                </Card.Body>
              </Card.Body>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default ItemList;
