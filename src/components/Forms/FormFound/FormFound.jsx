import { useState } from 'react';
import { Found } from '../FormsStyled.styled.js';
import styles from '../FormStyle.module.css';
import { useContext } from 'react';
import FormContext from '../../contexts/formContexts/FormContext.js';

const FormFound = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [lastSurname, setLastSurname] = useState('');

    const { setFullName } = useContext(FormContext);

    const handleSearch = e => {
        e.preventDefault();

        const full = `${surname} ${name} ${lastSurname}`.trim();

        setFullName(full);
    };

    return (
        <Found>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Имя"
                name="first-name"
            />
            <input
                type="text"
                onChange={(e) => setSurname(e.target.value)}
                placeholder="Фамилия"
                name="surname"
            />
            <input
                type="text"
                onChange={(e) => setLastSurname(e.target.value)}
                placeholder="Отчество"
                name="last-surname"
            />

            <button onClick={handleSearch}>Найти</button>
        </Found>
    );
};

export default FormFound;