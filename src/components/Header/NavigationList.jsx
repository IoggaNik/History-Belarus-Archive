const NavigationList = () => {
    return (
        <nav className="header-links-block">
            <ul className="links">
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

export default NavigationList;