import React from 'react';
import copy from 'copy-to-clipboard';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

export const ResultDialog = ({ open, closeFunction, result }) => {

    const resultText = (result.minutes > 0 ? result.minutes + ' min ' : '') + result.seconds + ' sec (' + result.wordsCount + ' word)';
    
    return (
        <Dialog open={open} aria-labelledby="result-dialog-title" aria-describedby="result-dialog-description" onClose={closeFunction}>
            <DialogTitle id="result-dialog-title">
                Estimated reading time
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="result-dialog-description" >
                    {resultText}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button color="secondary" onClick={() => {closeFunction(false)}} >exit</Button>
                <Button color="primary" onClick={() => {copy(resultText); closeFunction(true)}} >copy</Button>
            </DialogActions>
        </Dialog>
    );
};

export const AboutDialog = ({ open, closeFunction }) => {
    return (
        <Dialog open={open} onClose={() => {closeFunction('about')}}>
            <DialogTitle id="about-dialog-title">
                About
            </DialogTitle>
            <DialogContent>
                <DialogContentText align="justify">
                    <b>Reading</b> Meter is a minimalist single purpose webapp, that estimates the time necessary to read a given text.
                </DialogContentText>
                <DialogActions>
                    <Button color="primary" onClick={() => {closeFunction('about')}}>
                        Close
                    </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    );
};

export const LicenseDialog = ({open, closeFunction}) => {
    return (
        <Dialog open={open} onClose={() => {closeFunction('license')}}>
            <DialogTitle id="license-dialog-title">
                License
            </DialogTitle>
            <DialogContent dividers>
                <DialogContentText variant="h6">
                    GNU General Public License v3.0
                </DialogContentText>
                <DialogContentText gutterBottom align="justify">
                    Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications,
                     which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors 
                     provide an express grant of patent rights.
                </DialogContentText>
                <DialogActions>
                    <Button color="primary" onClick={() => {closeFunction('license')}}>
                        Close
                    </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    );
};

export const HelpDialog = ({open, closeFunction }) => {
    return (
        <Dialog open={open} onClose={() => {closeFunction('help')}}>
            <DialogTitle id="help-dialog-title">
                Help
            </DialogTitle>
            <DialogContent dividers>
                <DialogContentText gutterBottom>
                    
                </DialogContentText>
                <DialogActions>
                    <Button color="primary" onClick={() => {closeFunction('help')}}>
                        Close
                    </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    );
};