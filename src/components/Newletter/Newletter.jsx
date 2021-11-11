import React from 'react'
import { useStyles } from './styles'
import { Box, Button } from '@material-ui/core';
import {Send} from '@material-ui/icons';
export default function Newletter() {
    const classes = useStyles();
    
    return (
        <Box className={classes.container}>
            <Box className={classes.header}>NewsLetter</Box>
            <Box className={classes.content}>Get timely form your favorite products.</Box>
            <Box className={classes.inputForm}>
                <input type="text" className={classes.input} placeholder="Your email address" />
                <Button className={classes.button} variant="contained"><Send/></Button>
            </Box>
        </Box>
    )
}
