import React from 'react';

const Option = (props) => (
    <div>
        {props.title + " "}
        <button onClick={(e) => {
            props.handleDeleteOption(props.title);
        }}>
            remove
        </button>
    </div>
);

export default Option;

// we don't use short version of export default 
// because component name will be unavailable
