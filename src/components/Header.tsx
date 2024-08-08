import {Button, TextField} from "@mui/material";
import {fetchSearch, setSearchValue} from "../redux/slice/SearchSlice.ts";
import {ISearchType} from "../type/search.type.ts";
import {useAppDispatch, useAppSelector} from "../hook/hook.ts";
import {useState} from "react";

export const Header = () => {
    //Получение значение запроса
    const [value, setValue] = useState("")
    const dispatch = useAppDispatch()
    //Отправка запроса
    const submitSearch = () => {
        dispatch(setSearchValue(value))
        dispatch(fetchSearch())
    }
    return (
        <header>
            <div className="wrapper">
                {/*Поле поиска*/}
                <TextField sx={{
                    maxWidth: "900px",
                    background: "white",
                    borderRadius: "4px"
                }} onChange={e => setValue(e.target.value)} value={value} fullWidth placeholder={"Введите поисковый запрос"}/>
                {/*Кнопка для отправки*/}
                <Button onClick={submitSearch} variant="contained">Искать</Button>
            </div>
        </header>
    )
}