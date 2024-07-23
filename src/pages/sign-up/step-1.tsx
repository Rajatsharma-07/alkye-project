import { Button, Card, CardContent, CardHeader, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import { UserData } from "../../types/login-user";

type Props={
    handleNext: any;
    handleChange: any;
    loginData: UserData;
}
export const Step1 = ({ handleNext, handleChange, loginData }: Props) => {
    return (
        <Container maxWidth='lg'>
            <Card sx={{ px: 5 }}>
                <CardHeader title={<img src="/assets/logo/Logo.png" alt="logo" style={{width: 90, height: 'auto', paddingTop: 30}}/>} />
                <CardContent sx={{ mb: 10 }}>
                    <Grid container spacing={3} sx={{ alignItems: 'center' }}>
                        <Grid item xs={12} md={5}>
                            <Stack spacing={3} direction={'column'}>
                                <Typography variant="body1">
                                    STEP 1
                                </Typography>
                                <Typography variant={"h5"} sx={{fontWeight: 'bold'}}>
                                    Enter your email address to continue
                                </Typography>
                                <Typography variant="body2">
                                    Log in to your account. If you don't have one, you will be prompted to create one.
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Stack spacing={2} direction={'column'} justifyContent='end' alignItems={'end'}>
                                <TextField fullWidth type="email" name="username" label="Email" value={loginData?.username} onChange={handleChange}/>
                                <Button size="large" fullWidth={false} variant="contained" color="inherit" onClick={handleNext}>Continue</Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    )
}