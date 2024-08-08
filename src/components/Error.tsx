import {Box,Typography} from "@mui/material";

//Вывод ошибки
export const Error = ({error}) => {
    return(
        <Box sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Typography variant="h2">Ошибка</Typography>
            <Typography>{error}</Typography>
        </Box>
    )
}