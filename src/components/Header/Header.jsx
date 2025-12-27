import Description from './Description';
import HeaderTopBlock from './HeaderTopBlock';
import './Header.css';
import Menu from './Menu';
import MenuContext from '../contexts/headerContexts/MenuContext'
import { useState } from 'react';
import Background from './Background';
import { useLockBodyScroll } from '../hooks/useLockBodyScroll.js'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    useLockBodyScroll(isOpen);

    const value = {
        isOpen,
        toggle: () => setIsOpen((prev) => !prev),
    };

    return (
        <>
            <MenuContext.Provider value={value}>
                <Background />
                <div className="dark-bg">
                    <header id='main-head'>
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