const Menu = () => {
    return (
        <nav className="menu">
            <button>Close</button>
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