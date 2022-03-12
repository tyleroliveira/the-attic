import {
  gql
} from "@apollo/client";

export const CREATE_USER = gql `
  mutation createUser($email: String!, $password: String!) {
    createUser(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const LOGIN = gql `
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

// addBox
// addItem
// updateBox
// updateItem
// removeBox
// removeItem 