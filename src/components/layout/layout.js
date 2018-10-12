import React from 'react';
import Aux from '../../hoc/aux';
import classes from './layout.module.css'
const layout = (props) => (

    <Aux>
        <div> Toolbar, sidebar, backdrop</div>
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;