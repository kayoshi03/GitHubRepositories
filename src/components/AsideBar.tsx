import {useSelector} from "react-redux";
import {Placeholder} from "./Placeholder.tsx";
import {Description} from "./Description.tsx";
import {Loader} from "./Loader.tsx";
import {Error} from "./Error.tsx";
import {IDescriptionType} from "../type/description.type.ts";
import {RootState} from "../redux/store.ts";

export const AsideBar = () => {
    //Получаем допольнительное описание
    const description:IDescriptionType = useSelector(state => state.description)<RootState>
    return (
        <aside>
                {
                    // Проверка статуса запроса
                    description.status === "succeeded" ?
                        //Вывод дополнительных сведений
                        <Description description={description}/> :
                            description.status === "idle" ?
                                //Надпись для пользователя "Выберите репозиторий"
                                <Placeholder/> :
                                    description.status === "loading" ?
                                        //Загрузка
                                        <Loader/> :
                                        description.status === "error" ?
                                            //Ошибка
                                            <Error error={"Непредвиденная ошибка"}/> : <></>
                }
        </aside>
    )
}