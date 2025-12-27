import MenuContext from '../contexts/headerContexts/MenuContext';
import { useContext } from 'react';
import MenuCloseSVG from './MenuCloseSVG';
import { Link } from 'react-router-dom';
import { handleScroll } from '../functions/handleScroll.js';

const Menu = () => {
    const { isOpen, toggle } = useContext(MenuContext);
    return (
        <nav className={`menu ${isOpen ? 'open' : ''}`}>
            <button onClick={toggle}>
                <MenuCloseSVG />
            </button>
            <ul>
                <li>
                    <Link to="/" onClick={toggle} className="header-link">
                        Главная
                    </Link>
                </li>
                <li>
                    <Link to="archive" className="header-link">
                        Архив
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={() => {
                            toggle()
                            handleScroll('contacts')
                        }}
                        to="/"
                        className="header-link"
                    >
                        Информация
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={() => {
                            toggle();
                            handleScroll('contacts');
                        }}
                        to="/"
                        className="header-link"
                    >
                        Контакты
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;