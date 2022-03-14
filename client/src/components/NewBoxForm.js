import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useMutation } from '@apollo/client';

import { ADD_BOX } from '../util/mutations';
import { GET_BOXES, ME } from "../util/queries"

import useAuth  from '../util/auth';

const NewBoxForm = () => {
    // Use state to set initial state to empty title string
    const [title, setBoxTitle] = useState("");

    // handleInputChange for user to input title
    const [addBox, { error }] = useMutation(ADD_BOX, {
    //     update(cache, { data: { addBox } }) {
    //       console.log(addBox)
    //         try {
    //             const {me} = cache.readQuery({ query: GET_BOXES });


    //             cache.writeQuery({
    //                 query: GET_BOXES,
    //                 data: { me:{boxes:[...me.boxes, addBox]}  },
    //             });
    //         } catch (err) {
    //             console.log(err);
    //         }

    //               // update me object's cache
    //   const me = cache.readQuery({ query: ME })?.me;
    //   if (!me) {
    //     // no me query in the cache yet. abort update.
    //     return;
    //   }
    //   cache.writeQuery({
    //     query: ME,
    //     data: { me: { ...me, boxes: [...me.boxes, addBox] } },
    //   });
    // },
});

//handle form submit to add box to user's box page
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addBox({
        variables: {
          title,
        },
      });
      //todo  remove this later
      window.location.reload();

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

        <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12 col-lg-9">
          <textarea
            name="title"
            placeholder="your title here.."
            value={title}
            className="form-input w-100"
            style={{ lineHeight: '1.5', resize: 'vertical' }}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-dark" type="submit">
            +
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            {error.message}
          </div>
        )}
      </form>
    )

}



export default NewBoxForm;