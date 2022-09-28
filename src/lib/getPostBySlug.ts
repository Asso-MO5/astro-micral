import fetchAPI from "./fetchAPI"

export default async function getPostBySlug(slug: string |number) {
  const data = await fetchAPI(`
    {
        postBy(slug: "${slug}") {
        title(format: RAW)
        content(format: RENDERED)
      }
    }
    `)
  return data?.postBy
}
