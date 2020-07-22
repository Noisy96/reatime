import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Box } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import logo from '../logo.svg';

// Dialogs
import { AboutDialog, LicenseDialog, HelpDialog } from './CustomDialogs';

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

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <AppBar position="static" color="inherit" elevation={1}>
                <Toolbar>
                    <Box flexGrow={1} justifyContent="center" mt={1}>
                        <img style={{maxWidth: "35vw"}} src={logo} alt="Reading meter logo" />
                    </Box>
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