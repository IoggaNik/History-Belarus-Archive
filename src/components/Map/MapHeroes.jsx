import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import MapView from './MapView.styled'

import heroesData from '../../heroes_data.json'

import styles from './MapStyle.module.css'
import { useState, useEffect, useContext } from 'react';
import FormContext from '../contexts/formContexts/FormContext';

const replaceE = (str) => {
    if (!str) return '';
    return str
        .toLowerCase()
        .trim()
        .replace(/\s+/g, ' ')
        .replace(/ё/g, 'е')
        .replace(/Ё/g, 'Е');
};

const findHero = (arr, str) => {
    return arr.find((obj) => replaceE(obj.fullName) === replaceE(str));
};

const MapHeroes = () => {
    const { fullName } = useContext(FormContext);

    const hero = findHero(heroesData, fullName);

    const { lat, lng } = hero?.coordinates || {}; 

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
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <MapView.SectionMap>
            <h1 className={styles.heading}>Карта</h1>
            <div style={{ width: 'fit-content', margin: '0 auto' }}>
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
                    >
                        {(lat && lng) && <Placemark geometry={[lat, lng]} />}
                    </Map>
                </YMaps>
            </div>
        </MapView.SectionMap>
    );
};

export default MapHeroes
