import {LanguageItem} from "./LanguageItem.tsx";
import {Box} from "@mui/material";
import {IDescriptionType} from "../type/description.type.ts";
import React from "react";

//Вывод остальных языков
export const LanguagesList:React.FC<IDescriptionType> = ({languages}) => {
    return(
        <Box sx={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap"
        }}>
            {
                //Делаем из обьекта в массив состоящий из ключей обьектов, тем самым получаем массив языков
                Object.keys(languages).map((item, index) => (
                    <LanguageItem key={index} item={item}/>
                ))
            }
        </Box>
    )
}