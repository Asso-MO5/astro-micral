import fetchAPI from "./fetchAPI"

export default async function getLastPosts() {
  const data = await fetchAPI(`{
    posts {
      edges {
        node {
          featuredImage {
            node {
              link
            }
          }
          isSticky
          slug
          title
          excerpt
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
   } `)
  return data?.posts.edges
}
