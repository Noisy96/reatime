import React from 'react';
import copy from 'copy-to-clipboard';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

const ResultDialog = ({ open, closeFunction, result }) => {

    const resultText = result.minutes + ' min ' + result.seconds + ' sec (' + result.wordsCount + ')';
    
    return (
        <Dialog open={open} aria-labelledby="result-dialog-title" aria-describedby="result-dialog-description">
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

export default ResultDialog;