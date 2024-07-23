import React, { useState } from 'react';
// @mui
import { Alert, AlertColor, AlertPropsColorOverrides, Button, Container, IconButton, Snackbar } from '@mui/material';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { UserData } from '../../types/login-user';
import { Step1 } from './step-1';
import { Step2 } from './step-2';
import CloseIcon from '@mui/icons-material/Close'

// ----------------------------------------------------------------------

/**
 * Define the steps (name) of stepper form.
 */
const STEPS = ['Email', 'Password',];

export default function SignUp() {

    const navigate = useNavigate();

    const [activeStep, setActiveStep] = useState<number>(0);

    const [snackbarData, setSnackbarData] = useState<{severity: AlertColor, message: string}>({severity: 'success', message: ''});

    const [loginData, setLoginData] = useState<UserData>({
        username: '',
        password: ''
    });

    const [open, setOpen] = useState<boolean>(false);

    const handleClose = (event: any, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    //increase the active step state by 1 every time we click the next button
    const handleNext = () => {
        if (activeStep !== STEPS.length - 1) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
            axios.post('https://untitled-twkmuar27a-uc.a.run.app/api/login/', loginData)
                .then((res) => {
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('user_id', res.data.user_id);
                    setSnackbarData({severity: "success", message: "Login Successfull!"});
                    setOpen(true);
                    navigate('/home');
                })
                .catch((err) => { console.error(err); setSnackbarData({severity: 'error', message: err?.response?.data?.non_field_errors?.[0] || "Unable to log in with provided credentials!"}); setOpen(true); });
        }
    };

    //decrease the active step state by 1 every time we click the back button
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleChange = (event: any) => {
        setLoginData({ ...loginData, [event?.target?.name]: event?.target?.value });
    }

    // This function is responsible to show the content on every step
    function getStepContent(step: number) {
        switch (step) {
            case 0:
                return <Step1 handleNext={handleNext} loginData={loginData} handleChange={handleChange} />
            case 1:
                return <Step2 handleNext={handleNext} handleBack={handleBack} loginData={loginData} handleChange={handleChange} />;
            default:
                return 'Unknown step';
        }
    }

    const action = (
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
        >
            <CloseIcon fontSize="small" />
        </IconButton>
    );
    return (
        <>
            <Container sx={{ my: 2 }}>
                {activeStep === STEPS.length ? (
                    <>
                        <Typography sx={{ my: 1 }}>All steps completed - you&apos;re finished</Typography>
                    </>
                ) : (
                    <>
                        {getStepContent(activeStep)}
                    </>
                )}
            </Container>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                color='green'
                message="Note archived"
                action={action}
            >
                <Alert
                    onClose={handleClose}
                    severity={snackbarData?.severity}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {snackbarData?.message}
                </Alert>
            </Snackbar>
        </>
    );
}
