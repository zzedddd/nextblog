import { gql, request } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_API_URL;

export const getPosts = async () => {
    const query = gql`
        query GetPosts {
            postsConnection {
                edges {
                    node {
                        author {
                            bio
                            name
                            id
                            photo {
                                url
                            }
                        }
                        createdAt
                        excerpt
                        slug
                        title
                        featuredImage {
                            url
                        }
                        categories {
                            name
                            slug
                        }
                    }
                }
            }
        }
    `

    const results = await request(graphqlAPI, query);
}