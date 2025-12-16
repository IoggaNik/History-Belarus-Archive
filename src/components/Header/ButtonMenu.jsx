import { useContext } from 'react';
import MenuContext from '../contexts/headerContexts/MenuContext';
import MenuSVG from './MenuSVG';

const ButtonMenu = () => {
    const { isOpen, toggle } = useContext(MenuContext);

    return (
        <button
            style={{
                opacity: isOpen ? '0' : '1',
            }}
            onClick={toggle}
            className="button-menu"
        >
            <MenuSVG />
        </button>
    );
};

export default ButtonMenu;
