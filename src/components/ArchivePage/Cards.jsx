import { useEffect, useState } from 'react';
import { FileInput, FileLabel } from '../Forms/FormsStyled.styled.js';
import {
    cardsContainer,
    heroCard,
    mainDesc,
    photo,
    h_descCont,
    descContainer,
    buttonDelete,
    changePhoto,
    buttonsContainer,
} from './ArchiveStyle.module.css';

const Cards = ({ newSortArray, staticData, onDelete, onUpdatePhoto }) => {
    const handlePhoto = (e, id) => {
        const file = e.target.files[0];

        if (!file) return;

        if (!file.type.startsWith('image/')) {
            alert('Пожалуйста, выберите изображение (jpg, png, webp)');
            return;
        }

        const maxSize = 2 * 1024 * 1024;
        if (file.size > maxSize) {
            alert('Файл слишком большой! Максимальный размер — 2Мб');
            return;
        }

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                const base64String = reader.result;
                onUpdatePhoto(id, base64String);
            };

            reader.readAsDataURL(file);
        }
    };

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
                                        <a target="_blank" href={wikiPage}>
                                            Подробнее...
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {!isOriginal && (
                                <div className={buttonsContainer}>
                                    <button
                                        className={buttonDelete}
                                        onClick={() => onDelete(id)}
                                    >
                                        Удалить
                                    </button>
                                    <FileInput
                                        type="file"
                                        name="photoUrl"
                                        id={`upload-${id}`}
                                        onChange={(e) => handlePhoto(e, id)}
                                    />
                                    <FileLabel
                                        htmlFor={`upload-${id}`}
                                        className={changePhoto}
                                    >
                                        Изменить фото
                                    </FileLabel>
                                </div>
                            )}
                        </div>
                    );
                }
            )}
        </div>
    );
};

export default Cards;