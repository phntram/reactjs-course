import { useContext } from "react";
import { GlobalContext } from "../../context";


function ComponentButtonContextConcept() {
    const { theme, setTheme } = useContext(GlobalContext);

    function handleButtonToggle() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <div>
            <button onClick={handleButtonToggle}>Change theme</button>
        </div>
    );
}

export default ComponentButtonContextConcept;