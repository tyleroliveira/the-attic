import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_ITEM } from '../util/mutations';

import {useAuth} from '../util/auth';

const NewItemForm = ({ boxId }) => {
  const [itemText, setItemText] = useState('');

  const [addItem, { error }] = useMutation(ADD_ITEM);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addItem({
        variables: {
          boxId,
          itemText,
        },
      });

      setItemText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'itemText' && value.length <= 280) {
      setItemText(value);
    }
  };

  return (
    <div>
      <h4>Add an item to your box?</h4>

        <>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="itemText"
                placeholder="Add your item..."
                value={itemText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Item
              </button>
            </div>
          </form>
        </>
    </div>
  );
};

export default NewItemForm;
