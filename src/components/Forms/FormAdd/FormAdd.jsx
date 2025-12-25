import { useRef, useState, useEffect } from 'react';
import {
    Add,
    BioTextArea,
    ButtonForm,
    FileInput,
    FileLabel,
    Input,
} from '../FormsStyled.styled.js';

import { BELARUS_DISTRICTS } from '../../../../data/dataDistricts.js';
import { replaceE } from '../../functions/replaceE.js';
import { sortedHeroes } from '../../../../data/dataSortHeroes.js';

if (!localStorage.getItem('heroes')) {
    localStorage.setItem('heroes', JSON.stringify(sortedHeroes));
}

const containsCyrillic = (str) => /\p{Script=Cyrillic}/u.test(str);

const FormAdd = () => {
    const formRef = useRef(null);

    const [dataNewHero, setDataNewHero] = useState({});

const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    for (const value of formData.values()) {
        if (typeof value === 'string' && value.trim() === '') {
            alert('Введите все данные!');
            return;
        }
    }

    for (const value of formData.values()) {
        if (typeof value === 'string' && !containsCyrillic(value)) {
            alert('Вводите кириллицей!');
            return;
        }
    }

    const getDist = formData.get('birthPlace');

    let foundLat = null;
    let foundLng = null;

    for (const [key, value] of Object.entries(BELARUS_DISTRICTS)) {
        if (replaceE(getDist).includes(replaceE(key))) {
            const { lat, lng } = value;
            foundLat = lat;
            foundLng = lng;
            break;
        }
    }

    if (!foundLat) {
        alert('Район не найден!');
        return;
    }

    const districtName = getDist.includes('кий')
        ? getDist
        : getDist.slice(-1) === 'к' ? `${getDist}ий` : `${getDist}ский`;
    
    formData.set('birthPlace', `${districtName} район`);
    formData.append('id', `${new Date().getTime() + Math.random()}`);
    formData.append('coordinates', JSON.stringify({ lat: foundLat, lng: foundLng }));

    const photoFile = formData.get('photoUrl');

    if (photoFile && photoFile.size > 0) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String = reader.result;
            const finalData = Object.fromEntries(formData);
            finalData.coordinates = JSON.parse(finalData.coordinates);
            finalData.photoUrl = base64String;
            setDataNewHero(finalData);
        };

        reader.readAsDataURL(photoFile);

    } else {
        const finalData = Object.fromEntries(formData);
        finalData.coordinates = JSON.parse(finalData.coordinates);
        setDataNewHero(finalData);
    }
};

    useEffect(() => {
        if (!dataNewHero || !dataNewHero.fullName) return;

        Object.keys(dataNewHero).length && console.log(dataNewHero);
        const currentHeroes = JSON.parse(localStorage.getItem('heroes')) || sortedHeroes;

        const isDuplicate = currentHeroes.some(
            (hero) => {
                if (!hero?.fullName) return false;
                return hero.fullName.trim().toLowerCase() === dataNewHero.fullName.trim().toLowerCase();
            }
        );

        if (isDuplicate) {
            alert('Этот герой уже есть в архиве!');
            return;
        }

        const updatedHeroes = [dataNewHero, ...currentHeroes].sort((a, b) =>
            a.fullName.localeCompare(b.fullName, 'ru')
        );

        localStorage.setItem('heroes', JSON.stringify(updatedHeroes));
        window.dispatchEvent(new Event("storage"));

        setDataNewHero({});
        formRef.current.reset();
    },[dataNewHero]);

    return (
        <Add ref={formRef} onSubmit={handleSubmit}>
            <Input
                type="text"
                name="fullName"
                placeholder="ФИО"
                autoComplete="off"
            />
            <Input
                type="text"
                name="birthPlace"
                placeholder="Район"
                autoComplete="off"
            />
            <Input
                type="text"
                name="rank"
                placeholder="Звание"
                autoComplete="off"
            />

            <BioTextArea
                name="biography"
                placeholder="Расскажите историю героя (его подвиги, жизнь, заслуги).."
            />

            <FileInput type="file" name="photoUrl" id="photo-upload" />
            <FileLabel htmlFor="photo-upload">Выберите фото📎</FileLabel>

            <ButtonForm type="submit">Добавить</ButtonForm>
        </Add>
    );
};

export default FormAdd;