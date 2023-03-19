import { Context } from "..";


interface PostParentType {
    authorId: number;
}


export const Post = {
  user: (parent: PostParentType, args: any, { userInfo, prisma }: Context) => {
    return prisma.user.findUnique({
        where: {
            id: parent.authorId
        }
    })
  },
};
