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

const replaceE = (str) => {
    if (!str) return '';
    return str
        .toLowerCase()
        .trim()
        .replace(/\s+/g, ' ')
        .replace(/ё/g, 'е')
        .replace(/Ё/g, 'Е');
};

const containsCyrillic = (str) => /\p{Script=Cyrillic}/u.test(str);

const FormAdd = () => {
    const formRef = useRef(null);

    const [dataNewHero, setDataNewHero] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(formRef.current);

        const getDist = formData.get('birthPlace');

        let foundLat = null;
        let foundLng = null;

        for (const [key, value] of Object.entries(BELARUS_DISTRICTS)) {
            if (replaceE(getDist).includes(replaceE(key))) {
                const { lat, lng } = value;
                foundLat = lat;
                foundLng = lng;

                if (!foundLat) alert('Район не найден!');

                break;
            }
        }

        if (!foundLat) alert('Район не найден!');

        formData.append('id', `${new Date().getTime() + Math.random()}`);
        formData.set('birthPlace', `${getDist} район`);

        formData.append(
            'coordinates',
            JSON.stringify({
                lat: foundLat,
                lng: foundLng,
            })
        );

        for (const value of formData.values()) {
            if (typeof value === 'string' && !containsCyrillic(value)) {
                alert('Вводите кириллицей!');
                return;
            }
        }

        setDataNewHero({ ...Object.fromEntries(formData) });
    };

    useEffect(() => {
        Object.keys(dataNewHero).length && console.log(dataNewHero),
            [dataNewHero];
    });

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

            <FileInput type="file" name="photoUrl" id='photo-upload' />
            <FileLabel htmlFor="photo-upload">Выберите фото</FileLabel>

            <ButtonForm type="submit">Добавить</ButtonForm>
        </Add>
    );
};

export default FormAdd;