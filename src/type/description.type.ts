export interface IDescriptionType {
    //Название репозитория
    name?: string,
    //Основной язык
    language?: string,
    //Ссылка на остальные языки
    languages_url?: string,
    //Остальные языки
    languages?: object | null | undefined
    //Количество звезд
    stars?: number,
    //Лицензия, если она есть
    license?: string | null
    //Статус Запроса
    status?: "idle" | "loading" | "succeeded" | "failed"
}