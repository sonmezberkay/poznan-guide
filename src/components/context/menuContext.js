import { createContext, useState } from "react";


const MenuContext = createContext({
    menuContentFillHandler: (content) => {},
    menuContent: [],
    name: ''
});


export const MenuContextProvider = ({children}) => {

    const [menuContent, setMenuContent] = useState([]);
    const [name, setName] = useState('');

    const menuContentFillHandler = (content, name) => {
        setMenuContent(content);
        setName(name);
    };

    const menuContextValue = {
        menuContentFillHandler,
        menuContent,
        name
    }

    return (
        <MenuContext.Provider value={menuContextValue}>
            {children}
        </MenuContext.Provider>
    )
};


export default MenuContext;