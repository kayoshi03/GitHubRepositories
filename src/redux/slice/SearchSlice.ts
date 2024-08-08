import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API} from "../../api/axios.ts";
import {ISearchType} from "../../type/search.type.ts";

//Количество выводимых репозиторий, максимум 100 ограничение MUI
const PER_PAGE = 100

//Начальное состояние поиска
const initialState:ISearchType = {
    searchValue: "",
    results: [],
    status: 'idle',
    error: null,
}

//Запрос на получение репозитерий по запросу
export const fetchSearch:any = createAsyncThunk(
    "search/fetch",
    async(_,{ getState }:any) => {
        try {
            const {searchValue} = getState().search
            const res = await API.get(`/search/repositories?q=${searchValue}&per_page=${PER_PAGE}`)
            return res.data
        }
        catch (err) {
            return err
        }
    }
)

const SearchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        //Изменение значения запроса
        setSearchValue: (state, action) => {
            state.searchValue = action.payload
        }
    },
    //Обновление статуса запроса и данных
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearch.pending, (state:ISearchType) => {
                state.status = 'loading';
            })
            .addCase(fetchSearch.fulfilled, (state:ISearchType, action) => {
                state.status = 'succeeded';
                state.results = <[]>action.payload;
            })
            .addCase(fetchSearch.rejected, (state:ISearchType, action) => {
                state.status = 'failed';
                state.error = action.error.payload.message;
            });
    }
})

export const { setSearchValue} = SearchSlice.actions;
export default SearchSlice.reducer;