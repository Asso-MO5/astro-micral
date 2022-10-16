import fetchAPI from "./fetchAPI"

export default async function getPostBySlug(slug: string |number) {
  const data = await fetchAPI(`
    {
        postBy(slug: "${slug}") {
        title
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

    console.log(data?.postBy)
  return data?.postBy
}
