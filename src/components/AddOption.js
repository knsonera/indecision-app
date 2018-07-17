import React from 'react';

export default class AddOption extends React.Component {

    state = {
        errorMessage: undefined
    };

    /*constructor(props) {
        super(props);
        this.handleAppOption = this.handleAppOption.bind(this);

        this.state = {
            errorMessage: undefined
        };
    }*/

    handleAppOption = (e) => {
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