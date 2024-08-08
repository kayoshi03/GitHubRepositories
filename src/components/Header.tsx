import {Button, TextField} from "@mui/material";
import {fetchSearch, setSearchValue} from "../redux/slice/SearchSlice.ts";
import {ISearchType} from "../type/search.type.ts";
import {useAppDispatch, useAppSelector} from "../hook/hook.ts";

export const Header = () => {
    //Получение значение запроса
    const searchValue:ISearchType = useAppSelector(state => state.search)
    const dispatch = useAppDispatch()
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
                }} onChange={e => dispatch(setSearchValue(e.target.value))} value={searchValue} fullWidth placeholder={"Введите поисковый запрос"}/>
                {/*Кнопка для отправки*/}
                <Button onClick={submitSearch} variant="contained">Искать</Button>
            </div>
        </header>
    )
}