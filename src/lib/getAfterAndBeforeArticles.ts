import fetchAPI from "./fetchAPI"

export default async function getAfterAndBeforeArticles(
  databaseId: number
): Promise<
  Array<{ href: string; title: string; position: "next" | "previous" }>
> {
  const cursors = await fetchAPI(`
    {
      posts(where: {id: ${databaseId}}) {
        edges {
          cursor
        }
      }
    }
  `)

  if (!cursors.posts) return []

  const { cursor } = cursors?.posts?.edges.at(0)
  if (!cursor) return []

  const before = await fetchAPI(`
    {
      posts(before: "${cursor}", last: 1) {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
    `)

  const after = await fetchAPI(`
    {
      posts(after: "${cursor}", first: 1) {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
    `)

  const links = []

  if (before?.posts && before?.posts.edges.length > 0) {
    links.push({
      href: "/article/" + before?.posts.edges.at(0).node.slug,
      title: before?.posts.edges.at(0).node.title,
      position: "previous",
    })
  }

  if (after?.posts && after?.posts.edges.length > 0) {
    links.push({
      href: "/article/" + after?.posts.edges.at(0).node.slug,
      title: after?.posts.edges.at(0).node.title,
      position: "next",
    })
  }

  return links
}
