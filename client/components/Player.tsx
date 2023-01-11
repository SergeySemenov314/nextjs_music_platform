import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import React from "react";
import styles from '../styles/Player.module.scss'
import { ITrack } from "../types/track";
import TrackProgress from "./TrackProgress";



const Player = () => {
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
    
    const active = false

    return (
        <div className= {styles.player}>
            <IconButton onClick={(e) => e.stopPropagation()}>
                {active
                    ? <Pause />
                    : <PlayArrow />
                }
            </IconButton>
            <Grid container direction='column' style={{ width: '200px', margin: '0 20px' }}>
                <div>{track.name }</div>
                <div style={{fontSize: '12px', color: 'grey'}}>{track.artist }</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={() => ({})} />
            <VolumeUp style={{ marginLeft: 'auto' }} />
            <TrackProgress left={0} right={100} onChange={() => ({})} />
        </div>
       
    );
};

export default Player;
