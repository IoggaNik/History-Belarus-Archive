import Description from './Description';
import HeaderTopBlock from './HeaderTopBlock';
import './Header.css';
import Menu from './Menu';
import MenuContext from '../contexts/headerContexts/MenuContext'
import { useState } from 'react';
import Background from './Background';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const value = {
        isOpen,
        toggle: () => setIsOpen((prev) => !prev),
    };

    return (
        <>
            <MenuContext.Provider value={value}>
                <Background />
                <div className="dark-bg">
                    <header>
                        <div className="head-block">
                            <Menu />
                            <HeaderTopBlock />
                            <Description />
                        </div>
                    </header>
                </div>
            </MenuContext.Provider>
        </>
    );
};

export default Header;