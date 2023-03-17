import { Button, Card, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TrackList from "../../components/TrackList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import MainLayout from "../../layouts/MainLayout";
import { NextThunkDispatch, wrapper } from "../../store";
import { fetchTracks, searchTracks } from "../../store/actions-creators/track";
import { ITrack } from "../../types/track";


const Index = () => {
    const router = useRouter()
    const { tracks, error } = useTypedSelector(state => state.track)
    const [query, setQuery] = useState<string>('')
    const [timer, setTimer] = useState(null)
    const dispatch = useDispatch() as NextThunkDispatch;

    const search = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
   

        if(timer) {
            clearTimeout(timer)
        }
        setTimer(
            setTimeout(async () => {
                await dispatch(await searchTracks(e.target.value))
            }, 500)
        )

    }

    if (error) {
        return <MainLayout>
            <h1>{error}</h1>
        </MainLayout>
    }


    // const tracks: ITrack[] = [
    //     {
    //         _id: '1',
    //         name: 'Let it be',
    //         artist: 'The Beatles',
    //         text: 'Lyrics',
    //         listens: 0,
    //         picture: 'https://assets.turbologo.ru/blog/ru/2022/04/06053053/arhiv-muzykalnyh-oblozhek_5.jpg',
    //         audio: 'http://localhost:5000/audio/1.mp3',
    //         comments: [],
    //     },
    //     {
    //         _id: '2',
    //         name: 'All My Loving',
    //         artist: 'The Beatles',
    //         text: 'Lyrics',
    //         listens: 0,
    //         picture: 'https://assets.turbologo.ru/blog/ru/2022/04/06053053/arhiv-muzykalnyh-oblozhek_5.jpg',
    //         audio: 'http://localhost:5000/audio/1.mp3',
    //         comments: [],
    //     },
    //     {
    //         _id: '3',
    //         name: 'Let it be',
    //         artist: 'All Together Now',
    //         text: 'Lyrics',
    //         listens: 0,
    //         picture: 'https://assets.turbologo.ru/blog/ru/2022/04/06053053/arhiv-muzykalnyh-oblozhek_5.jpg',
    //         audio: 'http://localhost:5000/audio/1.mp3',
    //         comments: [],
    //     },
    // ]


    return (
        <MainLayout title ={'Список треков - музыкальная площадка'}>
            <Grid container justifyContent='center'>
                <Card style={{ width: 900 }}>
                    <Box p={1}>
                        <Grid container justifyContent='space-between'>
                            <h1>List of tracks</h1>
                            <Button onClick={() => router.push('/tracks/create')}>Upload</Button>

                        </Grid>

                    </Box>
                    <TextField
                        fullWidth
                        value={query}
                        onChange = {search}
                    />
                    <TrackList tracks = {tracks} />

                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;


export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchTracks())
  
    return {
      props: {}
    };

});


  