import React from 'react';

import Option from './Option';
import AddOption from './AddOption';

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your options</h3>
            <button 
                className="button button--link" 
                onClick={props.handleDeleteOptions}>
                Remove All
            </button>
        </div>
        {props.options.length === 0 && <p className=".widget-header__message">Please add options to get started!</p>}
        {
            props.options.map((option, index) =>
                <Option 
                    key={option} 
                    title={option} 
                    count={index+1}
                    handleDeleteOption={props.handleDeleteOption}
                />
            )
        }
        <AddOption
            handleAddOption={props.handleAddOption}
        />
        <p></p>
        
    </div>
);

export default Options;