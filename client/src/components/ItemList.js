import React from 'react';


const ItemList = ({ items = [] }) => {

  // if (!items.length) {
  //   return <h3>No items Yet</h3>;
  // }
  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Items
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
    </>
  );
};

export default ItemList;
