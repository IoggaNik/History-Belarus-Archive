import Description from './Description';
import HeaderTopBlock from './HeaderTopBlock';
import './Header.css';
import Menu from './Menu';

const Header = () => {
    return (
        <div className='dark-bg'>
            <header>
                <div className="head-block">
                    <Menu />
                    <HeaderTopBlock />
                    <Description />
                </div>
            </header>
        </div>
    );
};

export default Header;