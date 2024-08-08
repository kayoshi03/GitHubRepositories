import {Button, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {fetchSearch, setSearchValue} from "../redux/slice/SearchSlice.ts";
import {ISearchType} from "../type/search.type.ts";
import {AppDispatch, RootState} from "../redux/store.ts";

export const Header = () => {
    //Получение значение запроса
    const value:ISearchType = useSelector(state => state.search.searchValue)<RootState>
    const dispatch = useDispatch()<AppDispatch>
    //Отправка запроса
    const submitSearch = () => {
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
                }} onChange={e => dispatch(setSearchValue(e.target.value))} value={value} fullWidth placeholder={"Введите поисковый запрос"}/>
                {/*Кнопка для отправки*/}
                <Button onClick={submitSearch} variant="contained">Искать</Button>
            </div>
        </header>
    )
}