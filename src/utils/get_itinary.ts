import { LngLatLike } from "mapbox-gl";
import { env } from "~/env.mjs";

export async function getItinary(start: LngLatLike, end: LngLatLike) {
  const response = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/driving/${start};${end}?alternatives=false&annotations=state_of_charge%2Cduration&geometries=geojson&language=fr&overview=simplified&steps=true&access_token=${env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
  );
  const data = await response.json();

  // console.log(data);
  return data.routes[0];
}
