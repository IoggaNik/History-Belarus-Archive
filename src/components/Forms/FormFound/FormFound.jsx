import { ButtonForm, Found, Input } from '../FormsStyled.styled.js';
import { useContext, useState } from 'react';
import FormContext from '../../contexts/formContexts/FormContext.js';

const FormFound = () => {
    const [f_name, set_f_name] = useState('');
    const { setFullName } = useContext(FormContext);

    const handleSearch = e => {
        e.preventDefault();

        if (!f_name.length) return;

        set_f_name('');
        setFullName(f_name);
    };

    return (
        <Found>
            <div>
                <Input
                    type="text"
                    name="fullName"
                    value={f_name}
                    onChange={(e) => set_f_name(e.target.value)}
                    placeholder="ФИО"
                    autoComplete="off"
                />
                <ButtonForm onClick={handleSearch}>Найти</ButtonForm>
            </div>
        </Found>
    );
};

export default FormFound;