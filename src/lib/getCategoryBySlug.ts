import fetchAPI from "./fetchAPI"

export default async function getCategoryBySlug(slug: string | number) {
  const data = await fetchAPI(`
    {
        category(id: "${slug}",idType: SLUG) {
            name
            id
        }
    }
    `)
  return data?.category
}
