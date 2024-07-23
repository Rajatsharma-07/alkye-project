import { useState } from 'react';
// @mui
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { UserData } from '../../types/login-user';
import { Step1 } from './step-1';
import { Step2 } from './step-2';

// ----------------------------------------------------------------------

/**
 * Define the steps (name) of stepper form.
 */
const STEPS = ['Email', 'Password',];

export default function SignUp() {

    const navigate = useNavigate();

    const [activeStep, setActiveStep] = useState(0);

    const [loginData, setLoginData] = useState<UserData>({
        username: '',
        password: ''
    })

    //increase the active step state by 1 every time we click the next button
    const handleNext = () => {
        if (activeStep !== STEPS.length - 1) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }else{
            axios.post('https://untitled-twkmuar27a-uc.a.run.app/api/login/', loginData)
                .then((res) => {
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('user_id', res.data.user_id);
                    navigate('/home');
                })
                .catch((err) => console.error(err));
        }
    };

    //decrease the active step state by 1 every time we click the back button
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleChange = (event: any) => {
        setLoginData({...loginData, [event?.target?.name]: event?.target?.value});
    }

    // This function is responsible to show the content on every step
    function getStepContent(step: number) {
        switch (step) {
            case 0:
                return <Step1 handleNext={handleNext} loginData={loginData} handleChange={handleChange}/>
            case 1:
                return <Step2 handleNext={handleNext} handleBack={handleBack} loginData={loginData} handleChange={handleChange}/>;
            default:
                return 'Unknown step';
        }
    }
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
        </>
    );
}
