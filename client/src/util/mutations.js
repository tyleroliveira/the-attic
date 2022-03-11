import {
  gql
} from "@apollo/client";

export const CREATE_USER = gql `
  mutation CreateUser($email: String!, $password: String!, $username: String!) {
    createUser(email: $email, password: $password) {
      token
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