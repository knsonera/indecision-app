// Grab the add function from the add.js file in the utils folder
// Grab React from the react npm module
// add(2, 4)

class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);

        this.state = {
            options: props.options
        };
    }

    componentDidMount() {
        // catch invalid data in json
        try {
            const json = localStorage.getItem('options');
            console.log(json);
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // Do nothing
        }
        
        
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);

            console.log("saving data");
        }
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add option';
        }
        if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));

    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    render() {
        const subtitle = "Put your life in the hands of your computer.";

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 1}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: "Indecision App"
};

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >What should I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <p>Here are your options:</p>
            {props.options.length === 0 && <p>Please add options to get started!</p>}
            {
                props.options.map((option) =>
                    <Option 
                        key={option} 
                        title={option} 
                        handleDeleteOption={props.handleDeleteOption}
                    />
                )
            }
            <AddOption
                handleAddOption={props.handleAddOption}
            />
            <p></p>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            {props.title + " "}
            <button onClick={(e) => {
                props.handleDeleteOption(props.title);
            }}>
                remove
            </button>
        </div>
    );
};

class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.handleAppOption = this.handleAppOption.bind(this);

        this.state = {
            errorMessage: undefined
        };
    }

    handleAppOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        e.target.elements.option.value = '';

        this.setState(() => ({ errorMessage: error }));
    }

    render() {
        return (
            <div>
                {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
                <form onSubmit={this.handleAppOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));