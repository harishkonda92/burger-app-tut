import React from 'react';
import classes from './button.module.css';
const buttons = (props) => {
    // console.log(classes);
    return (
        <button
            className={[classes.Button, classes[props.btnType]].join(' ')}
            onClick={props.clicked}
        >{props.children}</button>
    );
}

export default buttons;