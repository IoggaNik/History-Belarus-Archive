import { useContext } from "react";
import MenuContext from "../contexts/headerContexts/MenuContext";

const Background = () => {
    const { isOpen, toggle } = useContext(MenuContext);

    return <div onClick={toggle} className={`background-menu ${isOpen ? 'open' : ''}`}></div>;
};

export default Background;