import { Component } from "react";

// don't use this anymore, they try to migrating the class component to function component.
class ClassBasedComponent extends Component {
    // state
    state = {
        showText: false,
        changeColor: false,
        count: 0,
        changeCountStyle: false
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

    // componentDidMount: is a lifecycle method in React class components that is called after the component is mounted (the component has been rendered to the DOM). Setting state here will trigger re-rendering.
    /*
    Purposes:
        - Initialization: it's a good place to initialize things that require DOM nodes, such as setting up event listeners or initializing thrid-party libraries.
        - Data Fetching: Commonly used to fetch data from APIs. Since the component is now in the DOM, you can safely update the state with the fetched data.
        - Side Effect: Any side effects that need to happen after the component is rendered, like animations or logging.
    When to use:
        - Fetching data: When you need to fetch data from an API after the component mounts.
        - Setting up subscriptions: When you need to set up subscriptions or event listeners that depend on the DOM.
        - DOM manipulations: When you need to perform operations that require the component to be in the DOM, such as measuring its size or position.
    */
    componentDidMount() {
        console.log("This is a first method");
        this.setState({
            showText: !this.state.showText,
            changeColor: !this.state.changeColor
        });
    }

    // componentDidUpdate: is a lifecycle method in React class components that is called immediately after an update occurs. This method is useful for performing actions based on changes to the component’s state or props
    /*
    Purposes:
        - Reacting to Props or State changes: It allows you to perform operations in response to changes in props or state.
        - Side Effects: you can use it to trigger side effects that depend on the component's updated state or props.
        - Comparing Previous and Current Props/State: It provides access to the previous props and state, allowing you to compare them with the current ones and conditionally excute code.

    When to use:
        - Fetching data: When you need to fetch new data based on changes in props or state.
        - Updating the DOM: When you need to perform DOM manipulations that depend on the component’s updated state or props.
        - Triggering side effects: When you need to trigger side effects, such as logging or analytics, based on updates to the component.
    */
    handleCountClick = () => {
        this.setState({
            ...this.state,
            count: this.state.count + 1
        });
    };

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps, prevState);
        if (prevState && prevState.count != this.state.count && this.state.count == 10) {
            this.setState({
                ...this.state,
                changeCountStyle: !this.state.changeCountStyle
            });
        }
    }

    // componentWillUnmount: a lifecycle method in React class components that is called just before a component is removed or “unmounted” from the DOM. This method is essential for cleaning up resources and preventing memory leaks.
    /*
    Purposes:
        - Cleanup: It allow you to clean up any resources that were allocated in "componentDidMount" or during the component's lifecycle.
            - Cancelling network requests: If you have on-going network requests, you should cancel them to avoid updating the state of an unmounted component.
            - Remove event listeners: 
    */
    componentWillUnmount() {
        console.log("Component is getting unmounted");
    }

    // render method to render a jsx code.
    render() {
        console.log(this.state);
        const { showText, changeColor, count, changeCountStyle } = this.state;
        return (
            <div>
                {/* {this.state.showText ? <h3>Class Based Component</h3> : null} */}
                {showText ? <h3 style={{ color: changeColor ? "red" : "black" }}>Class Based Component</h3> : null}
                <button onClick={this.handleClick}>Toggle Text</button>
                <button onClick={this.handleCountClick}>Increase Count Value</button>
                <h3 style={{ color: changeCountStyle ? "red" : "black" }}>Count is {count}</h3>
            </div>
        );
    }
}


export default ClassBasedComponent;