import { Component } from "react";

// don't use this anymore, they try to migrating the class component to function component.
class ClassBasedComponent extends Component {
    // state
    state = {
        showText: false,
        changeColor: false
    };

    handleClick = () => {
        console.log("toggle click");
        // this is not recommented
        // this.state.showText = !this.state.showText;

        const { showText, changeColor } = this.state;
        this.setState({
            // showText: !this.state.showText
            showText: !showText,
            changeColor: !changeColor
        });

    };
    // render method to render a jsx code.
    render() {
        console.log(this.state);
        const { showText, changeColor } = this.state;
        return (
            <div>
                {/* {this.state.showText ? <h3>Class Based Component</h3> : null} */}
                {showText ? <h3 style={{ color: changeColor ? "red" : "black" }}>Class Based Component</h3> : null}
                <button onClick={this.handleClick}>Toggle Text</button>
            </div>
        );
    }
}


export default ClassBasedComponent;