import fetchAPI from "./fetchAPI"

export default async function getAllPostsByCategory(id:string) {
  const data = await fetchAPI(`
    {
      posts(where: { categoryIn: "${id}"},first: 10000) {
        edges {
          node {
            featuredImage {
              node {
                link
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
    }
    `)
  return data?.posts?.edges
}
