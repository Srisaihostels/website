import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const mapboxToken = 'pk.eyJ1Ijoic3Jpc2FpaG9zdGVscyIsImEiOiJjbWVidnFhcnUwcmVmMmxxOHg2eTNvMTNqIn0.66Emr30ftT9sjFl7IE7kaQ';

  // Sri Sai Womens Hostel coordinates from Google Maps
  const hostelLocation: [number, number] = [78.5417328, 17.3969989];

  useEffect(() => {
    if (!mapContainer.current) return;

    try {
      // Set Mapbox access token
      mapboxgl.accessToken = mapboxToken;
      
      // Initialize map
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: hostelLocation,
        zoom: 16,
        pitch: 45,
      });

      // Add marker for the hostel
      const marker = new mapboxgl.Marker({
        color: '#2d7738', // Primary color from design system
        scale: 1.2
      })
        .setLngLat(hostelLocation)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
              <div style="text-align: center; font-family: Inter, sans-serif;">
                <h3 style="margin: 0 0 8px 0; color: #2d7738; font-weight: 600;">Sri Sai Womens Hostel</h3>
                <p style="margin: 0; color: #666; font-size: 14px;">Pragathi Nagar, Ramanthapur<br>Hyderabad, Telangana</p>
              </div>
            `)
        )
        .addTo(map.current);

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Add fullscreen control
      map.current.addControl(new mapboxgl.FullscreenControl(), 'top-right');

      // Show popup by default
      marker.getPopup().addTo(map.current);

    } catch (error) {
      console.error('Error initializing map:', error);
    }

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-soft h-[400px]">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm p-3 rounded-lg shadow-card border border-border">
        <h3 className="text-sm font-semibold text-foreground flex items-center">
          <MapPin className="h-4 w-4 text-primary mr-1" />
          Sri Sai Womens Hostel
        </h3>
        <p className="text-xs text-muted-foreground">Pragathi Nagar, Hyderabad</p>
      </div>
    </div>
  );
};

export default Map;