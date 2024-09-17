import fetchJson from "$lib/fetch-json";

export async function load() {
  const url = 'https://fdnd.directus.app/items/squad?filter={"tribe_id":2}';

  const response = await fetchJson(url)
  
  return {
    squads: response.data,
  }
}