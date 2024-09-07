import { useReducer } from "react";

const initialState = {
    showTextFlag: false,
    changeTextStyleFlag: false
};

const HIDE_TEXT = "HIDE_TEXT";
const SHOW_TEXT = "SHOW_TEXT";
const CHANGE_TEXT_STYLES = 'CHANGE_TEXT_STYLES';

function reducer(state, action) {
    switch (action.type) {
        case 'HIDE_TEXT':
            // console.log(state);
            return { ...state, showTextFlag: false };
        case 'SHOW_TEXT':
            // console.log(state);
            return { ...state, showTextFlag: true };
        case 'CHANGE_TEXT_STYLES':
            // console.log(state);
            return { ...state, changeTextStyleFlag: true };
        default:
            return state;
    }
}

function UseReducerExample() {
    // 'reducer' function contains your custom state logic.
    // 'initialState' can be a simple value but generally will contain an object.
    // the useReducer hook returns the current 'state' and a 'dispatch' method.
    // 'dispatch' method: is used to send an action to the reducer function.
    /*
    In simple terms, the dispatch method is like sending a message to your state management system, telling it what action to take to update the state.
    */
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);

    return (
        <div>
            <h3 style={{ display: state.showTextFlag ? "block" : "none", color: state.changeTextStyleFlag ? "red" : "black" }}>Use Reducer Example</h3>
            <button onClick={() => dispatch({ type: HIDE_TEXT })}>Hide Text</button>
            <button onClick={() => dispatch({ type: SHOW_TEXT })}>Show Text</button>
            <button onClick={() => dispatch({ type: CHANGE_TEXT_STYLES })}>Toggle Text Styles</button>
        </div>
    );
}

export default UseReducerExample;