import React, {useRef, useEffect} from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
import 'mapbox-gl/dist/mapbox-gl.css';

import './Map.css';

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = 'pk.eyJ1IjoiZXJuc3QyMSIsImEiOiJja2dteWZndG4wYmM0MnFyenM3em0yMGE4In0.3eRblROMZGQZ17R2klt2YA';

const Map = props => {
  const mapContainer = useRef();

  const {center, zoom} = props;

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: center,
      zoom: zoom,
    });

    new mapboxgl.Marker({color: 'black', rotation: 45})
      .setLngLat(center)
      .addTo(map);
  }, [center, zoom]);



  return (
    <div ref={mapContainer} className={`map ${props.className}`} style={props.style}>

    </div>
  );
};

export default Map;
