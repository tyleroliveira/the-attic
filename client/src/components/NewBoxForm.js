// import React, { useState, useEffect } from 'react';
import { Form, Button} from 'react-bootstrap';
// import { useMutation } from '@apollo/client';
// import { ADD_BOX } from '../utils/mutations';

const NewBoxForm = () => {
    // Use state to set initial state to empty title string

    // handleInputChange for user to input title

    //handle form submit to add box to user's box page

    //reset form data to initial state

    return (

          <Form>
          <Form.Group>
          <Form.Label htmlFor='title'>Title:</Form.Label>
          <Form.Control
            type='text'
            placeholder='your title'
            name='title'
            // onChange={handleInputChange}
            // value={userFormData.email}
            required
          />
        </Form.Group>
          <Button
            type="button" 
            className="btn btn-dark" 
            data-dismiss="modal">
              +
          </Button>
          </Form>
    )

}



export default NewBoxForm;