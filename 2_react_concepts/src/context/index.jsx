import { createContext, useState } from "react";

// create a context
export const GlobalContext = createContext(null);

// create the global state that receipe component as children.
// Provide the context to the children component and pass the value you want to share and supply the state value.
// after wrapping the component tree with the Provider then use useContext hook to access the context value in any child component (consume the Context).
function GlobalState({ children }) {

    const [theme, setTheme] = useState('light');
    return <GlobalContext.Provider value={{ theme, setTheme }}>{children}</GlobalContext.Provider>;
}

export default GlobalState;