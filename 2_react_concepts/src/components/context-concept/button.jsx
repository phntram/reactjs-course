import { useContext } from "react";
import { GlobalContext } from "../../context";


function ComponentButtonContextConcept() {
    // const { theme, setTheme } = useContext(GlobalContext);

    // function handleButtonToggle() {
    //     setTheme(theme === 'light' ? 'dark' : 'light');
    // }

    const { handleChangeThemeOnButtonClick } = useContext(GlobalContext);

    return (
        <div>
            {/* <button onClick={handleButtonToggle}>Change theme</button> */}
            <button onClick={handleChangeThemeOnButtonClick}>Change theme</button>
        </div>
    );
}

export default ComponentButtonContextConcept;