import {Box} from "@mui/material";
import {License} from "./License.tsx";
import {LanguagesList} from "./LanguagesList.tsx";
import {StarsCount} from "./StarsCount.tsx";
import {MainLanguage} from "./MainLanguage.tsx";
import {Name} from "./Name.tsx";
import {IDescriptionType} from "../type/description.type.ts";
import React from "react";

export const Description = ({description}:IDescriptionType) => {

    return (
        <Box
            sx={{
                padding: "24px 32px 24px 32px",
                display: "flex",
                flexDirection: "column",
                gap: "16px"
            }}
        >
            {/*Название Репозиторя*/}
            <Name name={description.name}/>
            <Box sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                {/*Главный язык*/}
                <MainLanguage language={description.language}/>
                {/*Количество звезд*/}
                <StarsCount stars={description.stars}/>
            </Box>
            {/*Список остальных языков*/}
            <LanguagesList languages={description.languages}/>
            {/*Лицензия, если она есть*/}
            <License license={description.license}/>
        </Box>
    )
}