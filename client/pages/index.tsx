import { Button } from "@mui/material";
import Navbar from "../components/Navbar";
import MainLayout from "../layouts/MainLayout";

const index = () => {
    return (
        <>
            <MainLayout>
                <div className="center">
                    <h1>Главная страница</h1>
                    <h3>Здесь собраны лучшие треки!</h3>
                </div>
            </MainLayout>

            <style jsx>
                {`
                    .center {
                        margin-top: 150px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                `}

            </style>
        </>
    );
};

export default index;
