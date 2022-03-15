const {
  gql
} = require("apollo-server-express");

const typeDefs = gql `

  type Query {
    me: User
    box: Box
  }

  type Box {
    _id: ID!
    title: String!
    items: [Item]
  }

  type Item {
    _id: ID!
    itemTitle: String!
    itemCode: String
    itemLink: String
  }

  type Mutation {
    createUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBox(title: String!): Box
    addItem(boxId: ID!, itemTitle: String!, itemCode: String, itemLink: String): Box
    removeBox(boxId: ID!): Box
    removeItem(boxId: ID!, itemId: ID!): Box
    updateItem(_id: ID!, itemTitle: String!, itemCode: String, itemLink: String): Box
    updateBox(_id: ID!, title: String!): Box
  }

  type Auth {
    token: String!
    user: User!
  }

  type User {
    _id: ID!
    email: String!
    boxes: [Box]
  }
`;

module.exports = typeDefs;