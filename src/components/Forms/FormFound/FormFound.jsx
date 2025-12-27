import { ButtonForm, Found, Input } from '../FormsStyled.styled.js';
import { useContext, useState } from 'react';
import FormContext from '../../contexts/formContexts/FormContext.js';

import { scroller } from 'react-scroll';

const FormFound = () => {
    const [f_name, set_f_name] = useState('');

    const { setFullName } = useContext(FormContext);

    const handleSearch = e => {
        e.preventDefault();

        if (!f_name.length) return;

        set_f_name('');
        setFullName(f_name);

        if (f_name) {
            scroller.scrollTo('map-search', {
                duration: 50,
                smooth: true
            })
        }
    };

    return (
        <Found onSubmit={handleSearch}>
            <div>
                <Input
                    type="text"
                    name="fullName"
                    value={f_name}
                    onChange={(e) => set_f_name(e.target.value)}
                    placeholder="ФИО"
                    autoComplete="off"
                />
                <ButtonForm>Найти</ButtonForm>
            </div>
        </Found>
    );
};

export default FormFound;