import fetchAPI from "./fetchAPI"

export default async function getPostBySlug(slug: string |number) {
  const data = await fetchAPI(`
    {
        postBy(slug: "${slug}") {
        title
        id
        databaseId
        content(format: RENDERED)
        categories {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
    `)
  return data?.postBy
}
