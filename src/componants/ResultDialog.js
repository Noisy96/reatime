import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

const ResultDialog = ({ open }) => {
    
    return (
        <Dialog open={open} aria-labelledby="result-dialog-title" aria-describedby="result-dialog-description">
            <DialogTitle id="result-dialog-title">
                Estimated reading time
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="result-dialog-description" >
                    2 min 45 seconds (213 word)
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button color="secondary" >exit</Button>
                <Button color="primary" >copy</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ResultDialog;