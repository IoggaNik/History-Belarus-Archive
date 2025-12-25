import MenuContext from "../contexts/headerContexts/MenuContext";
import { useContext } from "react";
import MenuCloseSVG from './MenuCloseSVG'
import { Link } from "react-router-dom";

const Menu = () => {
    const { isOpen, toggle } = useContext(MenuContext)

    return (
        <nav className={`menu ${isOpen ? 'open' : ''}`}>
            <button onClick={toggle}>
                <MenuCloseSVG />
            </button>
            <ul>
                <li>
                    <Link to="/" className="header-link">
                        Главная
                    </Link>
                </li>
                <li>
                    <Link to="archive" className="header-link">
                        Архив
                    </Link>
                </li>
                <li>
                    <a to="#contacts" className="header-link">
                        Информация
                    </a>
                </li>
                <li>
                    <a onClick={toggle} href="#contacts" className="header-link">
                        Контакты
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;