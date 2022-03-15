import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';

import { GET_BOX } from '../util/queries';
import { ADD_ITEM } from '../util/mutations';

import {useAuth} from '../util/auth';
import { useParams } from 'react-router-dom';

const NewItemForm = () => {
  const { boxId: userParam } = useParams();
  const {loading, data, err} = useQuery(GET_BOX, {
    variables: { boxId: userParam},
  });
  const boxId = data?.box._id;

  const [itemTitle, setItemTitle] = useState("");
  const [itemCode, setItemCode] = useState("");
  const [itemLink, setItemLink] = useState("");

  const [addItem, { error }] = useMutation(ADD_ITEM);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addItem({
        variables: {
           boxId,
           itemTitle,
           itemCode,
           itemLink
        },
      });

       setItemTitle("");
       setItemCode("");
       setItemLink("");
    } catch (err) {
      console.error(err);
    }
  };

  // const handleChange = (event) => {
  //   const { title, code, link, value } = event.target;

  //   if (title === 'itemText' && code === 'itemCode' && link === "itemLink" && value.length <= 280) {
  //     setFormState({...formState, [title]: value});
  //   }
  // };

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
                name="itemTitle"
                placeholder="Add your title..."
                value={itemTitle}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={(event) => setItemTitle(event.target.value)}
              ></input>
            </div>
            <div className="col-12 col-lg-9">
              <input
                name="itemCode"
                placeholder="Add your code.."
                value={itemCode}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={(event) => setItemCode(event.target.value)}
              ></input>
            </div>
            <div className="col-12 col-lg-9">
              <input
                name="itemLink"
                placeholder="Add your link.."
                value={itemLink}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={(event) => setItemLink(event.target.value)}
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
