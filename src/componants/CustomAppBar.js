import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { MoreVert, HelpOutline } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

const CustomAppBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <b>Reading</b> speed
                    </Typography>
                    <IconButton edge="end">
                        <HelpOutline />
                    </IconButton>
                    <IconButton edge="end">
                        <MoreVert />
                    </IconButton>
                </Toolbar>
            </AppBar>            
        </div>
    );
};

export default CustomAppBar;