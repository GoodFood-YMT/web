"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { env } from "~/env.mjs";
import { getItinary } from "~/utils/get_itinary";

interface DeliveryMapProps {
  start: { lon: number; lat: number };
  end: { lon: number; lat: number };
}

export function DeliveryMap({ start, end }: DeliveryMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [zoom, setZoom] = useState(12);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/standard",
      center: [start.lon, start.lat],
      zoom: zoom,
      accessToken: env.NEXT_PUBLIC_MAPBOX_TOKEN,
    });

    map.current.on("load", () => {
      setMapLoaded(true);
    });
  });

  useEffect(() => {
    async function initBounds() {
      const data = await getItinary(start, end);

      if (data) {
        if (map.current && map.current.getSource("route")) {
          // @ts-ignore
          map.current?.getSource("route").setData({
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: data.geometry.coordinates,
            },
          });
        } else {
          map.current?.addLayer({
            id: "route",
            type: "line",
            source: {
              type: "geojson",
              data: {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "LineString",
                  coordinates: data.geometry.coordinates,
                },
              },
            },
            layout: {
              "line-join": "round",
              "line-cap": "round",
            },
            paint: {
              "line-color": "#3887be",
              "line-width": 5,
              "line-opacity": 0.75,
            },
          });

          map.current?.addLayer({
            id: "point-start",
            type: "circle",
            source: {
              type: "geojson",
              data: {
                type: "FeatureCollection",
                features: [
                  {
                    type: "Feature",
                    properties: {},
                    geometry: {
                      type: "Point",
                      coordinates: [start.lon, start.lat],
                    },
                  },
                ],
              },
            },
            paint: {
              "circle-radius": 10,
              "circle-color": "#3887be",
            },
          });

          map.current?.addLayer({
            id: "point-end",
            type: "circle",
            source: {
              type: "geojson",
              data: {
                type: "FeatureCollection",
                features: [
                  {
                    type: "Feature",
                    properties: {},
                    geometry: {
                      type: "Point",
                      coordinates: [end.lon, end.lat],
                    },
                  },
                ],
              },
            },
            paint: {
              "circle-radius": 10,
              "circle-color": "#3887be",
            },
          });
        }
      }
    }

    if (mapLoaded) initBounds();
  }, [start, end, mapLoaded]);

  return <div ref={mapContainer} className="mt-4 h-[400px]" />;
}
