import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import styles from '../styles/Player.module.scss'
import { ITrack } from "../types/track";
import TrackProgress from "./TrackProgress";

let audio;

const Player = () => {
    const track:ITrack = {
        _id: '1',
        name: 'Let it be',
        artist: 'The Beatles',
        text: 'Lyrics',
        listens: 0,
        picture: 'https://assets.turbologo.ru/blog/ru/2022/04/06053053/arhiv-muzykalnyh-oblozhek_5.jpg',
        audio: 'http://localhost:5000/audio/1.mp3',
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
    
    const { pause, volume, active, duration, currentTime } = useTypedSelector(state => state.player)
    const { pauseTrack, playTrack, setVolume, setCurrentTime, setDuration, setActive } = useActions()
    
    useEffect(() => {
        if (!audio) {
            audio = new Audio()
            audio.src = track.audio
            audio.value = volume / 100 
        }
    }, [])

    const play = () => {
        if (pause) {
            playTrack()
            audio.play()
        } else {
            pauseTrack()
            audio.pause()

        }

    }

    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.volume = Number(e.target.value) / 100
        setVolume(Number(e.target.value))

    }

    return (
        <div className= {styles.player}>
            <IconButton onClick={play}>
                {pause
                    ? <PlayArrow />
                    : <Pause />
                }
            </IconButton>
            <Grid container direction='column' style={{ width: '200px', margin: '0 20px' }}>
                <div>{track.name }</div>
                <div style={{fontSize: '12px', color: 'grey'}}>{track.artist }</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={() => ({})} />
            <VolumeUp style={{ marginLeft: 'auto' }} />
            <TrackProgress left={volume} right={100} onChange={changeVolume} />
        </div>
       
    );
};

export default Player;
