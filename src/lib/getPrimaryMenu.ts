import fetchAPI from './fetchAPI'

export default async function getPrimaryMenu() {
  const data = await fetchAPI(`
    {
      menu(id: "dGVybToxNTA0") {
       
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
    `)
  console.log(data)
  return data?.menu?.at(0)
}
