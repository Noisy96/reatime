import React, { useState } from 'react';
import SnackBar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

const SuccessSnackBar = ({open}) => {

    // TODO : Lift this state up
    const [visibility, setVisibility] = useState(open);

    return (
        <SnackBar open={visibility} autoHideDuration={6000} onClose={() => {setVisibility(false)}}>
            <Alert elevation={6} variant="filled" severity="success">Copied Successfully!</Alert>
        </SnackBar>
    );
}

export default SuccessSnackBar;