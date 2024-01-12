import { LngLatLike } from "mapbox-gl";
import { env } from "~/env.mjs";

export async function getItinary(
  start: { lat: number; lon: number },
  end: { lat: number; lon: number },
) {
  const response = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/driving/${start.lon},${start.lat};${end.lon},${end.lat}?alternatives=false&annotations=state_of_charge%2Cduration&geometries=geojson&language=fr&overview=simplified&steps=true&access_token=${env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
  );

  if (!response.ok) {
    return null;
  }

  const data = await response.json();

  return data.routes[0];
}
