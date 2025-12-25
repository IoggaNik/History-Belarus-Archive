import { Link } from 'react-router-dom';

const NavigationList = () => {
    return (
        <>
            <nav className="header-links-block">
                <ul className="links">
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
                        <a href="#contacts" className="header-link">
                            Информация
                        </a>
                    </li>
                    <li>
                        <a href='#contacts' className="header-link">
                            Контакты
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default NavigationList;