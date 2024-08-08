import {Placeholder} from "./Placeholder.tsx";
import {Description} from "./Description.tsx";
import {Loader} from "./Loader.tsx";
import {Error} from "./Error.tsx";
import {IDescriptionType} from "../type/description.type.ts";
import {useAppSelector} from "../hook/hook.ts";

export const AsideBar = () => {
    //Получаем допольнительное описание
    const description:IDescriptionType = useAppSelector(state => state.description)
    return (
        <aside>
                {
                    // Проверка статуса запроса
                    description.status == "succeeded" ?
                        //Вывод дополнительных сведений
                        <Description description={description}/> :
                            description.status == "idle" ?
                                //Надпись для пользователя "Выберите репозиторий"
                                <Placeholder/> :
                                    description.status == "loading" ?
                                        //Загрузка
                                        <Loader/> :
                                        description.status == "failed" ?
                                            //Ошибка
                                            <Error error={"Непредвиденная ошибка"}/> : <></>
                }
        </aside>
    )
}