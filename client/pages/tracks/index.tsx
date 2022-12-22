import { Button, Card, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import React from "react";
import TrackList from "../../components/TrackList";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";

const Index = () => {
    const router = useRouter()
    const tracks: ITrack[] = [
        {
            _id: '1',
            name: 'Let it be',
            artist: 'The Beatles',
            text: 'Lyrics',
            listens: 0,
            picture: 'https://assets.turbologo.ru/blog/ru/2022/04/06053053/arhiv-muzykalnyh-oblozhek_5.jpg',
            audio: 'string',
            comments: [],
        },
        {
            _id: '2',
            name: 'All My Loving',
            artist: 'The Beatles',
            text: 'Lyrics',
            listens: 0,
            picture: 'https://assets.turbologo.ru/blog/ru/2022/04/06053053/arhiv-muzykalnyh-oblozhek_5.jpg',
            audio: 'string',
            comments: [],
        },
        {
            _id: '3',
            name: 'Let it be',
            artist: 'All Together Now',
            text: 'Lyrics',
            listens: 0,
            picture: 'https://assets.turbologo.ru/blog/ru/2022/04/06053053/arhiv-muzykalnyh-oblozhek_5.jpg',
            audio: 'string',
            comments: [],
        },
    ]


    return (
        <MainLayout>
            <Grid container justifyContent='center'>
                <Card style={{ width: 900 }}>
                    <Box p={1}>
                        <Grid container justifyContent='space-between'>
                            <h1>List of tracks</h1>
                            <Button onClick={() => router.push('/tracks/create')}>Upload</Button>

                        </Grid>

                    </Box>
                    <TrackList tracks = {tracks} />

                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;
