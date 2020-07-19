import React from 'react';
import SnackBar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

const SuccessSnackBar = ({open, closeFunction}) => {

    return (
        <SnackBar open={open} autoHideDuration={6000} onClose={() => {closeFunction()}}>
            <Alert elevation={6} variant="filled" severity="success">Copied Successfully!</Alert>
        </SnackBar>
    );
}

export default SuccessSnackBar;