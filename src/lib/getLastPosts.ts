import fetchAPI from './fetchAPI'

export default async function getLastPosts() {
  const data = await fetchAPI(`{
    posts(where:{categoryId: 1485}) {
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
