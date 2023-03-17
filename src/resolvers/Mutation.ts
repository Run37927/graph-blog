// this resolver is for postCreate
import { Context } from "../index";
import { Post } from ".prisma/client";

interface PostCreateArgs {
  title: string;
  content: string;
}

interface PostPayloadType {
  userErrors: {
    message: string;
  }[];
  post: Post | null;
}

export const Mutation = {
  postCreate: async (
    parent: any,
    { title, content }: PostCreateArgs,
    { prisma }: Context
  ): Promise<PostPayloadType> => {
    // validation step
    if (!title || !content) {
        return {
            userErrors: [{
                message: "You must provide a title and a content to create a post"
            }],
            post: null
        }
  
    } 

    const post = await prisma.post.create({
      data: {
        title,
        content,
        authorId: 1,
      },
    });

    return {
        userErrors: [],
        post
    }
  },
};
