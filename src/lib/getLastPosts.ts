import fetchAPI from "./fetchAPI"

export default async function getLastPosts() {
  const data = await fetchAPI(`{
    posts {
      edges {
        node {
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          isSticky
          id
          slug
          title
          excerpt

          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
   } `)
  return data?.posts.edges
}
