import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

const ResultDialog = ({ open, closeFunction, result }) => {
    
    return (
        <Dialog open={open} aria-labelledby="result-dialog-title" aria-describedby="result-dialog-description">
            <DialogTitle id="result-dialog-title">
                Estimated reading time
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="result-dialog-description" >
                    {result.minutes} min {result.seconds} seconds ({result.wordsCount} word)
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button color="secondary" onClick={() => {closeFunction(false)}} >exit</Button>
                <Button color="primary" onClick={() => {closeFunction(true)}} >copy</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ResultDialog;