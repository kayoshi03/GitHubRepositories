import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IDescriptionType} from "../../type/description.type.ts";
import {API} from "../../api/axios.ts";

//Начальное состояние допольнительного описания
const initialState:IDescriptionType = {
    status: "idle"
}

export const fetchLanguages:any = createAsyncThunk(
    "languages/fetch",
    async(_,{ getState }) => {
        try {
            const {languages_url} = getState().description
            const res = await API.get(languages_url)
            return res.data
        }
        catch (err) {
            return err
        }
    }
)

const DescriptionSlice = createSlice({
    name: "description",
    initialState,
    reducers: {
        setDescription: (state:IDescriptionType, action) => {
            state.name = action.payload.name
            state.languages_url = action.payload.languages_url
            state.license = action.payload.license?.name
            state.language = action.payload.language
            state.stars = action.payload.stargazers_count
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLanguages.pending, (state:IDescriptionType) => {
                state.status = "loading"
            })
            .addCase(fetchLanguages.fulfilled, (state:IDescriptionType, action) => {
                state.status = "succeeded"
                state.languages = action.payload
            })
            .addCase(fetchLanguages.rejected, (state:IDescriptionType) => {
                state.status = "failed"
            })
    }
})

export const { setDescription} = DescriptionSlice.actions;
export default DescriptionSlice.reducer;