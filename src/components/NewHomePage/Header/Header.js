import React from 'react';
import classes from './Header.module.css';
import NavButton from './NavButton/NavButton';

const header = () => (
    <header className={classes.Header}>
        <NavButton />
    </header>
);

export default header;