

import { Container } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";

const MainLayout = ({children}) => {
    return (
        <>
            <Navbar />
            <Container>
                {children}
            </Container>
        </>
    );
};

export default MainLayout;
