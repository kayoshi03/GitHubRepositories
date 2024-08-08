import {Typography} from "@mui/material";

//Текст для пользователя, чтоб выбирал репозиторий
export const Placeholder = () => {
    return (
        <div className="placeholder">
            <Typography
                sx={{
                    color: "rgba(0, 0, 0, 0.87)",
                    lineHeight: "143%",
                    letterSpacing: "0.17px"
                }}
            >
                Выберите репозиторий
            </Typography>
        </div>
    )
}