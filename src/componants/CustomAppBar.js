import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';

// Dialogs
import { AboutDialog, LicenseDialog, HelpDialog } from './CustomDialogs';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

const CustomAppBar = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const [aboutDialog, setAboutDialog] = useState(false);
    const [licenseDialog, setLicenseDialog] = useState(false);
    const [helpDialog, setHelpDialog] = useState(false);

    const handleOpenCloseDialogs = (id) => {
        switch (id) {
            case 'about':
                setAboutDialog(!aboutDialog);
                handleMenuClose();
                break;
            case 'license':
                setLicenseDialog(!licenseDialog);
                handleMenuClose();
                break;
            case 'help':
               setHelpDialog(!helpDialog);
               handleMenuClose();
                break;
            default:
                throw new Error();
        }
    }

    const classes = useStyles();

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit" elevation={1}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="secondary">
                        {/* TODO: Make "time" thiner */}
                        ReaTime
                    </Typography>
                    <IconButton aria-controls="simple-menu" aria-haspopup="true" edge="end" onClick={handleMenuOpen}>
                        <MoreVert />
                    </IconButton>
                    <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose} keepMounted>
                        <MenuItem onClick={() => {handleOpenCloseDialogs('license')}}>License</MenuItem>
                        <MenuItem onClick={() => {handleOpenCloseDialogs('about')}}>About</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            <AboutDialog open={aboutDialog} closeFunction={handleOpenCloseDialogs} />
            <LicenseDialog open={licenseDialog} closeFunction={handleOpenCloseDialogs} />
            <HelpDialog open={helpDialog} closeFunction={handleOpenCloseDialogs} />
        </div>
    );
};

export default CustomAppBar;