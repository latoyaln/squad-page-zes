import fetchJson from "$lib/fetch-json";
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const url =`https://fdnd.directus.app/items/person/?filter={"squad_id":${params.squad_id}}&sort=name`;

  const response = await fetchJson(url);

  // If the persons array is empty, throw a 404 error
  if (!response.data || response.data.length === 0) {
    throw error(404, `Squad with Name ${params.squad_id} not found`);
  }

  return {
    persons: response.data,
  };
}