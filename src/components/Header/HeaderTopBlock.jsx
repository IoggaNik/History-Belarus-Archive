import Logo from "./Logo";
import NavigationList from "./NavigationList";
import ButtonMenu from './ButtonMenu'

const HeaderTopBlock = () => {
    return (
        <div className="header-top-block">
            <Logo />
            <ButtonMenu />
            <NavigationList />
        </div>
    );
};

export default HeaderTopBlock;
