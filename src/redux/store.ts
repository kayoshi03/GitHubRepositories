import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../redux/slice/SearchSlice.ts';
import descriptionSlice from "./slice/DescriptionSlice.ts";
//Инициализация стора и редюсеров
export const store = configureStore({
    reducer: {
        search: searchReducer,
        description: descriptionSlice
    },
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch