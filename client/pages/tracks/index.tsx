import { Button, Card, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import TrackList from "../../components/TrackList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import MainLayout from "../../layouts/MainLayout";
import { NextThunkDispatch, wrapper } from "../../store";
import { fetchTracks } from "../../store/actions-creators/track";
import { ITrack } from "../../types/track";


const Index = () => {
    const router = useRouter()
    const { tracks, error } = useTypedSelector(state => state.track)
    
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


// export const getServerSideProps = wrapper.getServerSideProps(store => async ({query}) => {
//     const dispatch = store.dispatch as NextThunkDispatch
//     await dispatch(await fetchTracks)

// });

// export const getServerSideProps = wrapper.getServerSideProps(store => async ({ query }) => {
//     console.log('store state on the server before dispatch', store.getState());
//     store.dispatch(setProfileData('mihai'));
//     console.log('store state on the server after dispatch', store.getState());
  
//     const data = query.data || 'default data';
//     //  http://localhost:3000?data='some-data'
  
//     return {
//       props: {
//         data
//       } // will be passed to the page component as props
//     };
//   });

  
export const getServerSideProps = wrapper.getServerSideProps(store => async ({ query }) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchTracks)

    // console.log('ИНФАА')
    // console.log(query.data)
  
    const data = query.data || 'default data';
  
    return {
      props: {
        data
      } // will be passed to the page component as props
    };
  });


  
  
// you can also use Redux `useSelector` and other hooks instead of `connect()`
// export default connect((state: State) => state)(Page);

  