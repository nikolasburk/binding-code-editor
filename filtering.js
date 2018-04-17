const Query = {
  searchUsers: (_, args, context, info) => {
    // The Prisma binding instance is attached to the `context`
    // so your resolvers can easily access it
    return context.prisma.query.users(
      {
        where: {
          name_contains: args.name
        },
      },
      info,
    )
  },
}
