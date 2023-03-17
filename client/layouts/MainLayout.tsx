

import { Container } from "@mui/material";
import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";
import Player from "../components/Player";

interface MainLayoutProps {
    children: React.ReactNode;
    title?: string;
    description?: string,
    keywords?: string
}

const MainLayout: React.FC<MainLayoutProps> = ({children, title, description, keywords}) => {
    return (
        <>
            <Head>
                <title>{title || 'Музыкальная площадка' }</title>
                <meta name="description" content={'Музыкальная площадка. ' + description} />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content={keywords || 'Музыка, треки, артисты'} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
            </Head>
            <Navbar />
            <Container>
                {children}
            </Container>
            <Player/>
        </>
    );
};

export default MainLayout;
