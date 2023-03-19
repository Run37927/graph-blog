// GraphQL Schema
import { gql } from "apollo-server";

export const typeDefs = gql`
    type Query {
        me: User
        posts: [Post!]!
        profile(userId: ID!): Profile
    }

    type Mutation {
        postCreate(post: PostInput!): PostPayload!
        postUpdate(postId: ID!, post: PostInput!): PostPayload!
        postDelete(postId: ID!): PostPayload!
        postPublish(postId: ID!): PostPayload!
        postUnpublish(postId: ID!): PostPayload!
        signup(
            credentials: CredentialsInput!,
            name: String!,  
            bio: String!
        ): AuthPayload!
        signin(credentials: CredentialsInput!): AuthPayload!
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

    type AuthPayload {
        userErrors: [UserError!]!
        token: String
    }

    type UserError {
        message: String!
    }

    input PostInput {
        title: String
        content: String
    }

    input CredentialsInput {
        email: String
        password: String!
    }
`;
