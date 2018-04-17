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

## filtering & sorting

## mutations

