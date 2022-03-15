import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';

import { ADD_ITEM } from '../util/mutations';

import {useAuth} from '../util/auth';

const NewItemForm = ({ boxId }) => {
  const [itemText, setItemText] = useState('');
  const [itemCode, setItemCode] = useState('');
  const [itemLink, setItemLink] = useState('');

  const [addItem, { error }] = useMutation(ADD_ITEM);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addItem({
        variables: {
          boxId,
          itemText,
          itemCode,
          itemLink
        },
      });

      setItemText('');
      setItemCode('');
      setItemLink('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { title, code, link, value } = event.target;

    if (title === 'itemText' && code === 'itemCode' && link === "itemLink" && value.length <= 280) {
      setItemText(value);
      setItemCode(value);
      setItemLink(value);
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
              <input
                name="itemText"
                placeholder="Add your title..."
                value={itemText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></input>
            </div>
            <div className="col-12 col-lg-9">
              <input
                name="itemCode"
                placeholder="Add your code.."
                value={itemCode}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></input>
            </div>
            <div className="col-12 col-lg-9">
              <input
                name="itemLink"
                placeholder="Add your link.."
                value={itemLink}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></input>
            </div>

            <div className="col-12 col-lg-3">
              <button 
              className="btn btn-dark" 
              type="submit">
                +
              </button>
            </div>
          </form>
        </>
    </div>
  );
};

export default NewItemForm;
