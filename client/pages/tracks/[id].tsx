import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";
import { Button, Grid, TextField } from "@mui/material";

const TrackPage = () => {
    const track:ITrack = {
        _id: '1',
        name: 'Let it be',
        artist: 'The Beatles',
        text: 'Lyrics',
        listens: 0,
        picture: 'https://assets.turbologo.ru/blog/ru/2022/04/06053053/arhiv-muzykalnyh-oblozhek_5.jpg',
        audio: 'string',
        comments: [
            {
                _id: '2',
                username: 'John',
                text: 'good song'
            },
            {
                _id: '3',
                username: 'Kate',
                text: 'very good song'
            },
        ],
    }
    const router = useRouter()



    return (
        <MainLayout>
           
            <Button
                variant={'outlined'}
                style={{ fontSize: 32 }}
                onClick={() => router.push('/tracks')}
            >
                К списку
            </Button>
            <Grid container style={{margin: '20px 0'}}>
                <img src={track.picture} alt="" width={200} height={200} />
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
                />
                <TextField
                    label='Комментарий'
                    fullWidth
                    multiline
                    rows = {4}
                />
                <Button>Отправить</Button>
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
