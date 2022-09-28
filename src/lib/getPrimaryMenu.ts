import fetchAPI from "./fetchAPI"

export default async function getPrimaryMenu() {
  const data = await fetchAPI(`
    {
      menus(where: {location: PRIMARY}) {
        nodes {
            menuItems {
            edges {
                node {
                path
                label
                uri
                connectedNode {
                    node {
                    ... on Page {
                        isPostsPage
                        slug
                    }
                    }
                }
                }
            }
            }
        }
        }
    }
    `)
  return data?.menus?.nodes.at(0)
}
