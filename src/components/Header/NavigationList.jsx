import { Link } from 'react-router-dom';

const NavigationList = () => {
    const handleScroll = () => {
        const element = document.getElementById('contacts');

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
                        <Link onClick={handleScroll} to="/" className="header-link">
                            Информация
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleScroll} to="/" className="header-link">
                            Контакты
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default NavigationList;
