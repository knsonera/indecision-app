class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleSubtractOne = this.handleSubtractOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count: props.count
        };
    }

    componentDidMount() {
        const count = parseInt(localStorage.getItem('count'), 10);
        if (isNaN(count)) {
            // Do nothing
        } else {
            this.setState(() => ({ count }));
        }

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleSubtractOne() {
        console.log('subtractOne');
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    handleReset() {
        console.log('reset');
        this.setState(() => {
            return {
                count: 0
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleSubtractOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 0
};

ReactDOM.render(<Counter />, document.getElementById('app'));

/*let count = 0;

const addOne = () => {
    count = count + 1;
    console.log("addOne", count);
    renderCounterApp();
}

const subtractOne = () => {
    count = count - 1;
    console.log("subtractOne", count);
    renderCounterApp();
}

const reset = () => {
    count = 0;
    console.log("reset", count);
    renderCounterApp();
}

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={subtractOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();
*/