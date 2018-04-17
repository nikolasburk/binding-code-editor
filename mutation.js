const Mutation = {
  createUser: (_, args, context, info) => {
    // The Prisma binding instance is attached to the `context`
    // so your resolvers can easily access it.
    return context.prisma.mutation.createUser(
      {
        data: {
          name: args.name
        },
      },
      info,
    )
  },
}
