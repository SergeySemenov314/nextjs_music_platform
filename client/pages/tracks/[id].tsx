import { useRouter } from "next/router";
import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";
import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import { GetServerSideProps } from "next";
import styles from '../../styles/TrackPage.module.scss'
import { useInput } from "../../hooks/useInput";
import { TrackSchema } from "../../../server/src/track/schemas/track.schema";

const TrackPage = ({serverTrack}) => {
    const [track, setTrack] = useState<ITrack>(serverTrack)
    const router = useRouter()
    const username = useInput('')
    const text = useInput('')

    const addComment = async () => {
       
        try {
            const response = await axios.post('http://localhost:5000/tracks/comment', {
                username: username.value,
                text: text.value,
                trackId: track._id
            })
            setTrack({...track, comments: [...track.comments, response.data]})
            
        } catch (e) {
            console.log(e)
            
        }
    }



    return (
        <MainLayout 
            title ={'Музыкальная площадка - ' + track.name + ' - ' + track.artist}
            keywords = {'Музыка, треки, '  + track.name + ', ' + track.artist}
        >
           
            <Button
                variant={'outlined'}
                style={{ fontSize: 32 }}
                onClick={() => router.push('/tracks')}
            >
                К списку
            </Button>
            <Grid container style={{margin: '20px 0'}}>
                <img src={'http://localhost:5000/' +track.picture} alt="" className={styles.trackPageImg}/>
                <div style={{ marginLeft: '30px' }}>
                    <h1>Название трека - {track.name}</h1>
                    <h1>Исполнитель - {track.artist}</h1>
                    <h1>Прослушиваний - {track.listens}</h1>
                </div>

            </Grid>
            <h1>Слова в треке</h1>
            <h1>{track.text}</h1>
            <h1>Комментарии</h1>
            <Grid container>
                <TextField
                    label='Ваше имя'
                    fullWidth
                    style={{marginBottom: '20px'}}
                    {...username}
                />
                <TextField
                    label='Комментарий'
                    fullWidth
                    multiline
                    rows = {4}
                    {...text}
                />
                <Button onClick={addComment}>Отправить</Button>
            </Grid>
            <div>
                {track.comments.map(comment => 
                    <div key={comment._id}>
                        <div>Автор - {comment.username}</div>
                        <div>Комментарий - {comment.text}</div>
                    </div>    
                )}
            </div>
        </MainLayout>
    );
};

export default TrackPage;

export const getServerSideProps: GetServerSideProps = async ({params}) =>{
    const responce = await axios.get('http://localhost:5000/tracks/' + params.id)
    return {
        props: {
            serverTrack: responce.data
        }
    }
}
