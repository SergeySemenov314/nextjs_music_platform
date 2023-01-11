

import { Container } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import Player from "../components/Player";

const MainLayout = ({children}) => {
    return (
        <>
            <Navbar />
            <Container>
                {children}
            </Container>
            <Player/>
        </>
    );
};

export default MainLayout;
