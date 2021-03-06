import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useMutation } from '@apollo/client';

import { ADD_BOX } from '../util/mutations';
import { GET_BOXES } from "../util/queries"

const styles ={
  form: { 
    textAlign: "center",
    padding: "15px",
  }
}
const NewBoxForm = () => {
    // Use state to set initial state to empty title string
    const [title, setBoxTitle] = useState("");

    // handleInputChange for user to input title
    const [addBox, { error }] = useMutation(ADD_BOX);

//handle form submit to add box to user's box page
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addBox({
        variables: {
          title,
        },
        refetchQueries: [
          GET_BOXES,
        ],
      });

      //reset form data to initial state
      setBoxTitle('');
    } catch (err) {
      console.error(err);
    }
  };

  // handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'title' && value.length <= 280) {
      setBoxTitle(value);
    }
  };

    return (
      <div 
      className="btn-box"
      style={styles.form}>
        <h3>NEW BOX</h3>
        <form
        onSubmit={handleFormSubmit}
        >
        <div>
          <input
            name="title"
            placeholder="your title here.."
            value={title}
            className="form-input w-100"
            style={{ lineHeight: '2.5'}}
            onChange={handleChange}
          />
        </div>
          <button 
          style={{margin: "10px"}}
          className="btn btn-dark" 
          type="submit">
            +
          </button>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            {error.message}
          </div>
        )}
      </form>
      </div>
    )
}



export default NewBoxForm;