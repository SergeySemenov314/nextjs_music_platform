import React from "react";
import { ITrack } from "../types/track";
import { Card, IconButton } from "@mui/material";
import styles from '../styles/TrackItem.module.scss'
import {Pause, PlayArrow} from "@mui/icons-material"

interface TrackItemProps {
    track: ITrack;
    active?: boolean
}

const TrackItem: React.FC<TrackItemProps> = ({track, active = true}) => {
    return (
        <Card className={styles.track}> 
            <IconButton>
                {active
                    ? <Pause />
                    : <PlayArrow />
                }
            </IconButton>
        </Card>
    );
};

export default TrackItem;
