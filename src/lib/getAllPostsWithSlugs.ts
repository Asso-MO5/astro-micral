import fetchAPI from "./fetchAPI"

export default async function getAllPostsWithSlugs() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
    `)
  return data?.posts
}
