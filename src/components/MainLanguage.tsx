import {Typography} from "@mui/material";
import {IDescriptionType} from "../type/description.type.ts";
import React from "react";

//Основной язык
export const MainLanguage:React.FC<IDescriptionType> = ({language}) => {
    return (
        <Typography sx={{
            width: "max-content",
            padding: "7px 10px",
            backgroundColor: "#2196F3",
            color: "white",
            borderRadius: "100px"
        }}>{language}</Typography>
    )
}