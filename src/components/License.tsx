import {Typography} from "@mui/material";
import {IDescriptionType} from "../type/description.type.ts";
import React from "react";

//Лицензия
export const License:React.FC<IDescriptionType> = ({license}) => {
    return (
        //Проверяем есть ли лицензия или нету
        <Typography>{license == null ? "Отсутствует лицензия" : license}</Typography>
    )
}