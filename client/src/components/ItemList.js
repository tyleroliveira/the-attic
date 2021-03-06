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
    marginBottom: "10px",
    borderRadius: "15px",
  },
  codeBox: {
    backgroundColor: "#f6F6F6",
    padding: "12px",
    borderRadius: "5px",
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
  const itemsReversed = [].concat(items).reverse();


  if (!items) {
    return <h3>No items Yet</h3>;
  }

  return (
    <>
      <h2
        style={styles.h2}>
        {data?.box.title}
      </h2>
        {itemsReversed &&
          itemsReversed.map((item) => (
            <Card 
              style={styles.singleItem}
              key={item._id}>
                <Card.Header 
                as="h5">{item.itemTitle}</Card.Header>
                <Card.Body>
                {!item.itemCode ? "" : 
                <pre
                style={styles.codeBox}>
                <code>{item.itemCode}</code>
                </pre>
                }
                {!item.itemLink ? "" :
                <Card.Body>
                <Card.Link href={item.itemLink}>{item.itemLink}</Card.Link>
                </Card.Body>
                }
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
            </Card>
          ))}
      </>
  );
};

export default ItemList;
