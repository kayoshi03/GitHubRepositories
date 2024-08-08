import {Typography} from "@mui/material";

export const HelloPage = () => {
    //Начальное окно
    return (
        <div className="main">
            <Typography sx={{
                color: "#4f4f4f",
                lineHeight: "143%",
                letterSpacing: "0.17px"
            }}
            variant="h3"
            >
                Добро пожаловать
            </Typography>
        </div>
    )
}