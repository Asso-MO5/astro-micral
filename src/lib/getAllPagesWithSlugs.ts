import fetchAPI from "./fetchAPI"

export default async function getAllPagesWithSlugs() {
  const data = await fetchAPI(`
    {
      pages(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
    `)
  return data?.pages
}
