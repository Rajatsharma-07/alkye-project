import { Card, CardContent, CardHeader, CircularProgress, Container, Grid, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { ImageData } from "../../types/image";
export const Home = () => {
    const IMAGES = [
        "/assets/images/photo-1542549300-f44fe5ea9d82.avif",
        "/assets/images/photo-1504751999194-ef177d837cfe.avif",
        "/assets/images/photo-1534236161823-3897f68b00b8.avif",
        "/assets/images/photo-1713190193924-8bd93c729b6b.avif",
        "/assets/images/photo-1542549300-f44fe5ea9d82.avif",
        "/assets/images/photo-1504751999194-ef177d837cfe.avif",
        "/assets/images/photo-1534236161823-3897f68b00b8.avif",
        "/assets/images/photo-1713190193924-8bd93c729b6b.avif",
        "/assets/images/photo-1542549300-f44fe5ea9d82.avif",
        "/assets/images/photo-1504751999194-ef177d837cfe.avif",
        "/assets/images/photo-1534236161823-3897f68b00b8.avif",
        "/assets/images/photo-1713190193924-8bd93c729b6b.avif",
        "/assets/images/photo-1542549300-f44fe5ea9d82.avif",
        "/assets/images/photo-1504751999194-ef177d837cfe.avif",
        "/assets/images/photo-1534236161823-3897f68b00b8.avif",
        "/assets/images/photo-1713190193924-8bd93c729b6b.avif",
        "/assets/images/photo-1542549300-f44fe5ea9d82.avif",
        "/assets/images/photo-1504751999194-ef177d837cfe.avif",
        "/assets/images/photo-1534236161823-3897f68b00b8.avif",
        "/assets/images/photo-1713190193924-8bd93c729b6b.avif",
    ]
    const CAROUSEL_DOTS = [
        "/assets/icons/Ellipse 5.png",
        "/assets/icons/Ellipse 6.png",
        "/assets/icons/Ellipse 6.png",
    ];

    const [imageData, setImageData] = useState<ImageData[]>([]);
    const [loader, setLoader] = useState<boolean>(false);
    useEffect(() => {
        setLoader(true);
        axios.get('https://untitled-twkmuar27a-uc.a.run.app/api', {headers: {Authorization: `Token ${localStorage?.getItem('token')}`}})
            .then((res) => {setImageData(res.data); setLoader(false);})
            .catch((err) => console.error(err));
    }, [])
    return (
        <Container maxWidth='lg'>
            <Card sx={{ background: 'black', color: 'whitesmoke' }}>
                <CardHeader title={
                    <Grid container>
                        <Grid item xs={1} md={4}>
                            <img src="/assets/logo/Logo_white.png" alt="logo" style={{ width: 80, height: 'auto' }} />
                        </Grid>
                    </Grid>
                } />
                <CardContent>
                    <Stack direction='column' spacing={6}>
                        <Stack spacing={1}>
                            <Typography variant="h5">
                                Welcome <span style={{ textDecoration: 'underline' }}>Test</span>
                            </Typography>
                            <Typography variant="body2">
                                Hope you having a good day
                            </Typography>
                        </Stack>
                        {loader ? <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><CircularProgress /></div> : <><Stack spacing={2}>
                            <Typography variant="h5" sx={{fontWeight: 'bold'}}>
                                Photography
                            </Typography>
                            <Stack direction="row" spacing={3} sx={{ overflowX: 'scroll', scrollbarWidth: 'none' }}>
                                {imageData?.map((image: ImageData) => {
                                    if(image?.prompt == 'Photography'){
                                        return(
                                        <img key={image?.id} src={image?.image_url} alt={image.title} style={{ width: 350, height: 400, borderRadius: '20px' }} />
                                        )
                                    }
                                    })}
                            </Stack>
                            <Stack direction={'row'} justifyContent={'end'} alignItems={'end'} spacing={1}>
                                {CAROUSEL_DOTS?.map((image: string) => <img src={image} alt="Carousel Dots" style={{ width: 20, borderRadius: '20px' }} />)}
                            </Stack>
                        </Stack>
                        <Stack spacing={2}>
                            <Typography variant="h5" sx={{fontWeight: 'bold'}}>
                                Learning
                            </Typography>
                            <Stack direction="row" spacing={3} sx={{ overflowX: 'scroll', scrollbarWidth: 'none' }}>
                            {imageData?.map((image: ImageData) => {
                                    if(image.prompt == 'Learning'){
                                        return(
                                        <img key={image?.id} src={image?.image_url} alt={image.title} style={{ width: 350, height: 400, borderRadius: '20px' }} />
                                        )
                                    }
                                    })}
                            </Stack>
                            <Stack direction={'row'} justifyContent={'end'} alignItems={'end'} spacing={1}>
                                {CAROUSEL_DOTS?.map((image: string) => <img src={image} alt="Carousel Dots" style={{ width: 20, borderRadius: '20px' }} />)}
                            </Stack>
                        </Stack></>}
                    </Stack>
                </CardContent>
            </Card>
        </Container>
    )
}