import {Typography} from "@mui/material";
import React from "react";

//Тип остальных языков
interface ILang {
    item:string
}

export const LanguageItem:React.FC<ILang> = ({item}) => {
    return(
        <Typography sx={{
            padding: "7px 10px",
            backgroundColor: "rgba(0,0,0,0.08)",
            borderRadius: "100px"
        }}>
            {item}
        </Typography>
    )
}