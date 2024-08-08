import {Typography} from "@mui/material";
import {AsideBar} from "./AsideBar.tsx";
import {Table} from "./Table.tsx";

//Основное окно
export const Main = () => {
    return (
        <main>
            <div className="content">
                <div className="wrapper">
                    {/*Заголовок*/}
                    <Typography sx={{
                        color: "rgba(0, 0, 0, 0.87)",
                        lineHeight: "143%",
                        letterSpacing: "0.17px"
                    }} variant="h3"
                    >
                        Результат поиска
                    </Typography>
                    {/*Таблица данных*/}
                    <Table/>
                </div>
            </div>
            {/*Допольнительное описание*/}
            <AsideBar/>
        </main>
    )
}