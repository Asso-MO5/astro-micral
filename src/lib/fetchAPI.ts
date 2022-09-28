import { WP } from "./api"

type Params = {
  variables?: Object
}

export default async function fetchAPI(query: string, { variables }: Params = {}) {
  const headers = { "Content-Type": "application/json" }

  const res = await fetch(WP, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
  })

  const json = await res.json()

  if (json.errors) {
    console.log(json.errors)
    throw new Error("Failed to fetch API")
  }

  return json.data
}
