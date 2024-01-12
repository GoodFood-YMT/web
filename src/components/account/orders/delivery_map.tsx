"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl, { LngLatLike } from "mapbox-gl";
import { env } from "~/env.mjs";

interface DeliveryMapProps {
  start: { lon: number; lat: number };
  end: { lon: number; lat: number };
}

export function DeliveryMap({ start, end }: DeliveryMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [zoom, setZoom] = useState(15);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/standard",
      center: [start.lon, start.lat],
      zoom: zoom,
      pitch: 55,
      accessToken: env.NEXT_PUBLIC_MAPBOX_TOKEN,
    });
  });

  return <div ref={mapContainer} className="mt-4 h-[400px]" />;
}
