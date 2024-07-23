import { Button, Card, CardContent, CardHeader, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import { UserData } from "../../types/login-user";

type Props = {
    handleNext: any;
    handleBack: any;
    loginData: UserData;
    handleChange: any;
}
export const Step2 = ({ handleNext, handleBack, loginData, handleChange }: Props) => {
    return (
        <Container maxWidth='lg'>
            <Card sx={{ px: 5 }}>
                <CardHeader title={<img src="/assets/logo/Logo.png" alt="logo" style={{ width: 80, height: 'auto', paddingTop: 30 }} />} />
                <CardContent sx={{ mb: 10 }}>
                    <Grid container spacing={3} sx={{ alignItems: 'center' }}>
                        <Grid item xs={12} md={5}>
                            <Stack spacing={3} direction={'column'}>
                                <Typography variant="body1">
                                    STEP 2
                                </Typography>
                                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                    Create an account to continue
                                </Typography>
                                <Typography variant="body2">
                                    You'll be able to log in to Dingoo with this email address and password.
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography variant="body2">Enter a account to create your account with</Typography>
                            <Stack spacing={2} direction={'column'} justifyContent='end' alignItems={'end'} sx={{ mt: 2 }}>
                                <TextField fullWidth value={loginData?.password} onChange={handleChange} type="password" name="password" label="Password" />
                                <Grid container rowSpacing={1}>
                                    <Grid item xs={6} md={8}>
                                        <Typography variant="body2">{`Use a minimum of 6 characters (case sensitive) with at least one number or special character.`} </Typography>
                                    </Grid>
                                    <Grid item xs={6} md={4}>
                                        <Button disabled={loginData?.password?.length >=     6 ? false : true} size="medium" fullWidth variant="contained" color="inherit" onClick={handleNext}>Continue</Button>
                                    </Grid>
                                </Grid>
                            </Stack>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="caption">
                                {`Dingoo will use your data to personalise and improve your Dingoo experience and to send you information about Dingoo. You can change your communication preferences anytime. We may use your data as described in our Privacy Policy, including sharing it with The Test of Companies. By clicking "Agree & Continue", you agree to our Subscriber Agreement and acknowledge that you have read our Privacy Policy and Collection Statement.`}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Stack justifyContent={'start'} alignItems={'start'}>
                                <Button fullWidth={false} onClick={handleBack}>Back</Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    )
}