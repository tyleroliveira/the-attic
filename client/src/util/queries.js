import { gql } from "@apollo/client";

export const ME = gql`
  query me {
    me {
      _id
      email
      password
    }
  }
`;

export const GET_BOX = gql`
  query Query($boxId: ID!) {
    box(boxId: $boxId) {
      _id
      title
      items {
        itemTitle
        itemCode
        itemLink
      }
    }
  }
`;

export const GET_ITEMS = gql`
  query items {
    me {
      boxes {
        items {
          _id
          itemTitle
          itemCode
          itemLink
        }
      }
    }
  }
`;
export const GET_BOXES = gql`
  query boxes {
    me {
      boxes {
        _id
        title
      }
    }
  }
`;

