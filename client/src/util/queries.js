import { gql } from "@apollo/client";

export const ME = gql`
  query getMe {
    me {
      _id
      email
      password
    }
  }
`;

export const GET_BOX = gql`
  query getBox($boxId: ID!) {
    box(boxId: $boxId) {
      _id
      title
      items {
        _id
        itemTitle
        itemCode
        itemLink
      }
    }
  }
`;

export const GET_ITEMS = gql`
  query getMyItems {
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
  query getMyBoxes {
    me {
      boxes {
        _id
        title
      }
    }
  }
`;

