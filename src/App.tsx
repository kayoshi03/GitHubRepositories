import {Header} from "./components/Header.tsx";
import {HelloPage} from "./components/HelloPage.tsx";
import {Footer} from "./components/Footer.tsx";
import {Main} from "./components/Main.tsx";
import {Loader} from "./components/Loader.tsx";
import {Error} from "./components/Error.tsx";
import {ISearchType} from "./type/search.type.ts";
import {useAppSelector} from "./hook/hook.ts";

//Вход программы
function App() {
    //Получения статуса
    const search:ISearchType = useAppSelector(state => state.search)
  return (
    <>
        {/*Шапка*/}
        <Header/>
        {
            //Проверка статуса
            search.status === "failed" ?
                //Ошибка
                <Error error={search.error}/> :
                    search.status === "idle" ?
                        //Начальное окно
                        <HelloPage/> :
                            search.status === "loading" ?
                                //Загрузка
                             <Loader/>  :
                                search.status === "succeeded" ?
                                    //Главное окно
                                    <Main/> : <></>
        }
        {/*Подвал*/}
        <Footer/>
    </>
  )
}
export default App
