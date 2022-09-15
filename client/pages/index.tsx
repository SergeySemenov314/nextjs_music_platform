import { Button } from "@mui/material";
import Navbar from "../components/Navbar";

const index = () => {
    return (
        <>
            {/* <Navbar/> */}
            <div className="center">
                <h1>Главная страница!</h1>
                <h3>Здесь собраны лучшие реки!</h3>
            </div>

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
