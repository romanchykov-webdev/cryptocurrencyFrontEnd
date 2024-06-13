import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

interface CustomSnackbarProps {
    message: string;
    severity: "success" | "error" | "warning" | "info";
    isOpen: boolean
}

const AlertComponent: React.FC<CustomSnackbarProps> = ({message, severity, isOpen}) => {
    // const [open, setOpen] = useState(true);
    // console.log('AlertComponent ')
    // console.log('open', isOpen)
    // console.log('severity', severity)


    return (
        <Snackbar open={isOpen} autoHideDuration={2000} onClose={() => isOpen}>
            <Alert severity={severity} sx={{width: '100%'}}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default AlertComponent;
