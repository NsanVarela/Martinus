import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    main: {
        marginTop: 'calc(2rem + 50px)',
        height: 'calc(100vh - 2rem - 50px)',
    },
});

export default function Main() {
    const classes = useStyles();
    return (
        <main className={classes.main}>
            <div>
                <h1>Hi there.</h1>
                <p>I'm a web developer blah blah blah...</p>
            </div>
        </main>
    )
}