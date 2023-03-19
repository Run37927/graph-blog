import { Context } from "..";

interface UserParentType {
  id: number;
}

export const User = {
  posts: (parent: UserParentType, args: any, { userInfo, prisma }: Context) => {
    const isOwnAccount = parent.id === userInfo?.userId;

    if (isOwnAccount) {
      return prisma.post.findMany({
        where: {
          authorId: parent.id,
        },
        orderBy: [{ createdAt: "desc" }],
      });
    } else {
      // if not your own account, only show published posts
      return prisma.post.findMany({
        where: {
            authorId: parent.id,
            published: true
          },
          orderBy: [{ createdAt: "desc" }],
      })
    }
  },
};
