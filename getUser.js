import { Prisma } from 'prisma-binding'

// Instantiate Prisma binding
const prisma = new Prisma({
  typeDefs: 'schemas/database.graphql',
  endpoint: 'https://us1.prisma.sh/demo/my-service/dev',
  secret: 'mysecret123'
})

// Retrieve user info from database
const userData = await prisma.query.user({}, `{ id name isAdmin }`)
console.log(`User: ${userData}`) 