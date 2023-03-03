import React, {useState, useContext, createContext} from 'react';
const Context = createContext();

export function ContextProviderd({children}) {
    const [pageSelected, setPageSelected] = useState({
        number: 1,
    })
    const data = { pageSelected, setPageSelected};
    return (
        <Context.Provider
            value={data}
        >
            {children}
        </Context.Provider>
    )
};
export const contextData = () => {
    const data = useContext(Context);
    return data;
};
