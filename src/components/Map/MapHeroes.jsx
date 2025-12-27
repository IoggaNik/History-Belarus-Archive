import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import MapView from './MapView.styled';
import styles from './MapStyle.module.css';
import { useState, useEffect, useContext } from 'react';
import FormContext from '../contexts/formContexts/FormContext';
import { sortedHeroes } from '../../../data/dataSortHeroes';

const replaceE = (str) => {
    if (!str) return '';
    return str.toLowerCase().trim().replace(/\s+/g, ' ').replace(/ё/g, 'е');
};

const findHero = (arr, str) => {
    return arr.find((obj) => replaceE(obj.fullName) === replaceE(str));
};

const MapHeroes = () => {
    const { fullName } = useContext(FormContext);
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        const load = () => {
            const saved = localStorage.getItem('heroes');
            setHeroes(saved ? JSON.parse(saved) : sortedHeroes);
        };

        load();

        window.addEventListener('storage', load);
        return () => window.removeEventListener('storage', load);
    }, []);

    const hero = findHero(heroes, fullName);
    const { lat, lng } = hero?.coordinates || {}; 

    const [zoom, setZoom] = useState(() => {
        if (window.innerWidth <= 610) return 5;
        if (window.innerWidth >= 1200) return 7;
        return 6;
    });

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 610) setZoom(5);
            else if (width >= 1200) setZoom(7);
            else setZoom(6);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <MapView.SectionMap id='map-search'>
            <h1 className={styles.heading}>Карта</h1>
            <div style={{ width: 'fit-content', margin: '0 auto' }}>
                <YMaps query={{ apikey: '409f1973-3a82-47cb-ab41-4260217bfa9b', lang: 'ru_RU' }}>
                    <Map
                        state={{ 
                            center: (lat && lng) ? [Number(lat), Number(lng)] : [53.9, 27.56], 
                            zoom: (lat && lng) ? 10 : zoom 
                        }}
                        modules={['control.ZoomControl', 'control.FullscreenControl']}
                        className={styles.map}
                    >
                        {lat && lng && (
                            <Placemark 
                                geometry={[Number(lat), Number(lng)]} 
                                properties={{ hintContent: hero.fullName }}
                                modules={['geoObject.addon.hint']}
                            />
                        )}
                    </Map>
                </YMaps>
            </div>
            <p style={{ textAlign: 'center' }}>Найдите место рождения героя на карте. Если его нет в архиве — добавьте данные ниже.</p>
        </MapView.SectionMap>
    );
};

export default MapHeroes;