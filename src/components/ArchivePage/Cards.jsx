import {
    cardsContainer,
    heroCard,
    mainDesc,
    photo,
    h_descCont,
    descContainer,
    buttonDelete,
} from './ArchiveStyle.module.css';

const Cards = ({ newSortArray, staticData, onDelete }) => {
    return (
        <div className={cardsContainer}>
            {newSortArray.map(
                ({ id, fullName, biography, rank, photoUrl, wikiPage }) => {
                    const isOriginal = staticData.some((h) => h.id === id);

                    return (
                        <div key={id} className={heroCard}>
                            <div className={mainDesc}>
                                <div>
                                    <img className={photo} src={photoUrl} />
                                </div>
                                <div className={h_descCont}>
                                    <h3>{fullName}</h3>
                                    <div className={descContainer}>
                                        <p>
                                            {rank.length
                                                ? rank
                                                : 'Звание: Неизвестно'}
                                        </p>
                                        <p>{biography.substring(0, 100)}...</p>
                                        <a href={wikiPage}>Подробнее...</a>
                                    </div>
                                </div>
                            </div>
                            {!isOriginal && (
                                <button
                                    className={buttonDelete}
                                    onClick={() => onDelete(id)}
                                >
                                    Удалить
                                </button>
                            )}
                        </div>
                    );
                }
            )}
        </div>
    );
};

export default Cards;