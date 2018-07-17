import React from 'react';

import Option from './Option';
import AddOption from './AddOption';

const Options = (props) => (
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

export default Options;