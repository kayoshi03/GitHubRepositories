import {IDescriptionType} from "./description.type.ts";

export interface ISearchType {
    //Запрос
    searchValue: string,
    //Результат запроса
    results: [],
    //Статус запроса
    status: "idle" | "loading" | "succeeded" | "failed",
    //Ошибка
    error: null | string,

}