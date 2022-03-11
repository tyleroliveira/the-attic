import React from 'react';

const ItemList = ({ items = [] }) => {
  if (!items.length) {
    return <h3>No items Yet</h3>;
  }

  return (
    <>
      <div className="flex-row my-4">
        {items &&
          items.map((item) => (
            <div key={item._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <p className="card-body">{item}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ItemList;
