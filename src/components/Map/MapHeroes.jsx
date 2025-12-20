import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import MapView from './MapView.styled'

import styles from './MapStyle.module.css'
import { useState } from 'react';
import { useEffect } from 'react';

const MapHeroes = () => {
    const [zoom, setZoom] = useState(() => {
        if (window.innerWidth <= 610) return 5;
        if (window.innerWidth >= 1200) return 7;
        return 6;
    })

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width <= 610) setZoom(5);
            else if (width >= 1200) setZoom (7);

            else setZoom(6);
        }

        window.addEventListener('resize', handleResize);
        return () => removeEventListener('resize', handleResize);
    }, []);

    return (
        <MapView.SectionMap>
            <h1>Карта</h1>
            <div>
                <YMaps
                    query={{
                        apikey: '409f1973-3a82-47cb-ab41-4260217bfa9b',
                        lang: 'ru_RU',
                    }}
                >
                    <Map
                        state={{ center: [53.9, 27.56], zoom: zoom }}
                        modules={[
                            'control.ZoomControl',
                            'control.FullscreenControl',
                        ]}
                        className={styles.map}
                    ></Map>
                </YMaps>
            </div>
        </MapView.SectionMap>
    );
};

export default MapHeroes