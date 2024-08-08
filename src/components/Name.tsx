import {Typography} from "@mui/material";
import {IDescriptionType} from "../type/description.type.ts";
import React from "react";
//Название репозитория
export const Name:React.FC<IDescriptionType> = ({name}) => {
    return(
        <Typography variant="h4">{name}</Typography>
    )
}