import { Link } from 'react-router-dom';
import { lazy, Suspense, useState, useEffect } from 'react';

import {
    headContainer,
    headBlock,
    heading,
    backLink,
    findInput,
} from './ArchiveStyle.module.css';

import Spinner from './Spinner';
import { sortedHeroes } from '../../../data/dataSortHeroes';
import HeroNotFound from './HeroNotFound';

const Cards = lazy(() => import('./Cards'));

const Archive = () => {
    const [findName, setFindName] = useState('');

    const [localHeroes, setLocalHeroes] = useState(() => {
        const saved = localStorage.getItem('heroes');
        return saved ? JSON.parse(saved) : sortedHeroes;
    });

    useEffect(() => {
        const saved = localStorage.getItem('heroes');

        if (saved) setLocalHeroes(JSON.parse(saved));
    }, []);

    const handleDelete = (id) => {
        if (window.confirm("Удалить героя из вашего списка?")) {
            const updated = localHeroes.filter(hero => hero.id !== id);
            setLocalHeroes(updated);
            localStorage.setItem('heroes', JSON.stringify(updated));
        }
    };

    const changeSort = localHeroes.filter(hero =>
        hero?.fullName?.toLowerCase().includes(findName.toLowerCase())
    );

    return (
        <>
            <div className={headContainer}></div>
            <section>
                <div className={headBlock}>
                    <h1 className={heading}>Архив Героев Беларуси</h1>
                    <Link to="/" className={backLink}>
                        Главная
                    </Link>
                </div>

                <Suspense fallback={<Spinner />}>
                    <input
                        className={findInput}
                        autoComplete="off"
                        type="text"
                        name="findHero"
                        placeholder="Найти героя: (ФИО)"
                        onChange={(e) => setFindName(e.target.value)}
                    />
                    {changeSort.length ? (
                        <Cards staticData={sortedHeroes} onDelete={handleDelete} newSortArray={changeSort} />
                    ) : (
                        <HeroNotFound />
                    )}
                </Suspense>
            </section>
        </>
    );
};

export default Archive;