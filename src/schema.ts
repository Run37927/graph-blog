// GraphQL Schema
import { gql } from "apollo-server";

export const typeDefs = gql`
    type Query {
        hello: String!
    }

    type Mutation {
        postCreate(title: String!, content: String!): PostPayload
    }

    # might not be the exact same as the table in postgresQL
    # don't need updatedAt here
    type Post {
        id: ID!
        title: String!
        content: String!
        createdAt: String!
        published: Boolean!
        user: User!
    }

    # don't wanna expose password here
    type User {
        id: ID!
        name: String!
        email: String!
        profile: Profile!
        posts: [Post!]!
    }

    type Profile {
        id: ID!
        bio: String!
        user: User!
    }

    type PostPayload {
        userErrors: [UserError!]!
        post: Post
    }

    type UserError {
        message: String!
    }
`;
