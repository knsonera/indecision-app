import React from 'react';

import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {

    state = {
        options: this.props.options,
        selectedOption: undefined
    };

    componentDidMount = () => {
        // catch invalid data in json
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // Do nothing
        }
        
        
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);

            console.log("saving data");
        }
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    }

    handleAddOption = (option) => {
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

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState({
            selectedOption: option
        });
    }

    handleClearSelectedOptionState = () => {
        this.setState(() => ({ selectedOption: undefined }));
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
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOptionState={this.handleClearSelectedOptionState}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

export default IndecisionApp;