import MenuContext from "../contexts/headerContexts/MenuContext";
import { useContext } from "react";
import MenuCloseSVG from './MenuCloseSVG'

const Menu = () => {
    const { isOpen, toggle } = useContext(MenuContext)

    return (
        <nav className={`menu ${isOpen ? 'open' : ''}`}>
            <button onClick={toggle}>
                <MenuCloseSVG />
            </button>
            <ul>
                <li>
                    <a href="/" className="header-link">
                        Главная
                    </a>
                </li>
                <li>
                    <a href="/" className="header-link">
                        Архив
                    </a>
                </li>
                <li>
                    <a href="/" className="header-link">
                        Информация
                    </a>
                </li>
                <li>
                    <a href="/" className="header-link">
                        Контакты
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;