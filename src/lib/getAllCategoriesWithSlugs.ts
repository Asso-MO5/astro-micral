import fetchAPI from "./fetchAPI"

export default async function getAllCategoriesWithSlugs() {
  const data = await fetchAPI(`
    {
      categories(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
    `)
  return data?.categories
}
