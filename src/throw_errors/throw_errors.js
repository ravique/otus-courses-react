import React from "react";


const ErrorMessage = props => (
    <span className="form__errors__message">
        {props.message}
    </span>
);


const ThrowErrors = props => (
    props.message ?
        <span className="form__errors">
       {
           props.message.map((error, key) =>
           <ErrorMessage message={error} key={key}/>
           )
       }
    </span> : ''
);

export default ThrowErrors;