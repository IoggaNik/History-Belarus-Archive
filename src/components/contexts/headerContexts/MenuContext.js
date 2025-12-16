import { createContext } from "react";

const MenuContext = createContext({
    isOpen: false,
    toggle: () => {}
})

export default MenuContext;