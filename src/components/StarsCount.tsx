import {Star} from "@mui/icons-material";
import {Typography} from "@mui/material";
import {IDescriptionType} from "../type/description.type.ts";
import React from "react";

//Количество звезд
export const StarsCount:React.FC<IDescriptionType> = ({stars}) => {
    return(
        <Typography sx={{
            display:"flex",
            alignItems: "center",
            gap: "8px"
        }}>
            {/*Иконка звезды*/}
            <Star sx={{color: "#FFB400"}}/>
            {stars}
        </Typography>
    )
}