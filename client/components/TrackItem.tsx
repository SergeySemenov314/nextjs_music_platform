import React from "react";
import { ITrack } from "../types/track";
import { Card, Grid, IconButton } from "@mui/material";
import styles from '../styles/TrackItem.module.scss'
import {Delete, Pause, PlayArrow} from "@mui/icons-material"

interface TrackItemProps {
    track: ITrack;
    active?: boolean
}

const TrackItem: React.FC<TrackItemProps> = ({track, active = false}) => {
    return (
        <Card className={styles.track}> 
            <IconButton>
                {active
                    ? <Pause />
                    : <PlayArrow />
                }
            </IconButton>
            <img width={70} src={track.picture} alt="" />
            <Grid container direction='column' style={{ width: '200px', margin: '0 20px' }}>
                <div>{track.name }</div>
                <div style={{fontSize: '12px', color: 'grey'}}>{track.artist }</div>

            </Grid>
            {active && <div>02:42 / 03:22</div>}
            <IconButton style={{ marginLeft: 'auto' }}>
                <Delete/>
            </IconButton>
        </Card>
    );
};

export default TrackItem;
