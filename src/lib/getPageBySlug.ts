import fetchAPI from "./fetchAPI";

export default async function getPageBySlug(slug:string) {
    const data = await fetchAPI(`
    {
      page(id: "${slug}", idType: URI) {
        title
        content
      }
    }
    `);
    return data?.page;
  }