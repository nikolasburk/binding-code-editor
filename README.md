# Overview

The examples are based on the following data model:

```graphql
type User {
  id: ID! @unique
  name: String!
  isAdmin: Boolean @default(value: "false")
}
```

## getUser

## basicResolver

Sample query for Playground:

```graphql
query {
  userList {
    id
    name
    isAdmin
  }
}
```

## filtering

Sample query for Playground:

```graphql
query {
  userList(name: "Sa") {
    id
    name
    isAdmin
  }
}
```

## mutations

```graphql
mutation {
  createUser(name: "Alice") {
    id
    name
    isAdmin
  }
}
```