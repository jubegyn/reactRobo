import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './mapa.css';

export default function Mapa({ latitude, longitude }) {
    const mapRef = useRef();
    const mapContainerRef = useRef();

    useEffect(() => {
        if (!latitude || !longitude) return; // Não faz nada se latitude ou longitude não estiverem definidos

        mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaW9jcGZlcnJvIiwiYSI6ImNtMjk4OGtsZDAycmYybHByeWNsNHBib2IifQ.1-GHnPqSCTHVfhmIDXvT2w';
        
        // Inicializa o mapa
        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [longitude, latitude],
            zoom: 15
        });

        // Adiciona o marcador
        new mapboxgl.Marker()
            .setLngLat([longitude, latitude])
            .addTo(mapRef.current);

        // Cleanup
        return () => {
            mapRef.current.remove();
        };
    }, [latitude, longitude]); // Adiciona latitude e longitude como dependências

    // Se latitude ou longitude não estiverem definidos, retorna null
    if (!latitude || !longitude) return null;

    return (
        <div id='map' ref={mapContainerRef} />
    );
}
