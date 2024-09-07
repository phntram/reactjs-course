import { useContext } from "react";
import { GlobalContext } from "../../context";


function ComponentTextContextConcept() {
    const { theme } = useContext(GlobalContext);
    return (
        <h1 style={{ fontSize: theme === 'light' ? '50px' : "100px", backgroundColor: theme === "light" ? 'white' : 'black', color: theme === 'light' ? 'red' : "blue" }}>
            Context Concept
        </h1>
    );
}

export default ComponentTextContextConcept;