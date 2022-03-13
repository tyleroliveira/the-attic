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
  query box {
    box {
      _id
      title
    }
}
`;

export const GET_ITEMS = gql`
  query items {
    me {
      boxes {
        items {
          _id
          title
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

