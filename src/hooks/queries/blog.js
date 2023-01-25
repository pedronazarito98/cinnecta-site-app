import { gql } from "graphql-request";

export const getPost = gql`
  query postPage($slug: String!) {
    post(where: { slug: $slug }) {
      id
      slug
      tags
      date
      title
      excerpt
      category
      mostAccessed
      linkReports
      seo {
        title
        keywords
        description
      }
      coverImage {
        url
      }
      content {
        html
        text
        raw
      }
      author {
        id
        name
      }
    }
  }
`;

export const getListPosts = gql`
  query postPages($orderBy: PostOrderByInput!, $first: Int!, $skip: Int!) {
    posts(orderBy: $orderBy, first: $first, skip: $skip) {
      id
      slug
      tags
      date
      title
      excerpt
      category
      mostAccessed
      linkReports
      seo {
        title
        keywords
      }
      coverImage {
        url
      }
      content {
        html
        text
        raw
      }
      author {
        id
        name
      }
    }
  }
`;

export const getTotalPosts = gql`
  query getTotalPosts {
    postsConnection {
      aggregate {
        count
      }
    }
  }
`;
