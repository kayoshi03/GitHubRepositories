import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {Box} from "@mui/material";
import {format} from "date-fns";
import {fetchLanguages, setDescription} from "../redux/slice/DescriptionSlice.ts";
import {ISearchType} from "../type/search.type.ts";
import {useAppDispatch, useAppSelector} from "../hook/hook.ts";

//Настройка колонок
const columns: GridColDef[] = [
    { field: 'name', headerName: 'Название', width: 150, editable: false, sortable: false},
    { field: 'language', headerName: 'Язык', width: 150, editable: false, sortable: false },
    { field: 'forks', headerName: 'Число форков', width: 150, editable: false },
    { field: 'stargazers_count', headerName: 'Число звезд', width: 150, editable: false },
    // Форматирование даты с помощью библиотеки date-fns
    { field: 'updated_at',valueFormatter: value => format(value, "dd.MM.yyyy"), headerName: 'Дата обновления', width: 200, editable: false },
];

export const Table = () => {
    //Получение данных
    const search:ISearchType = useAppSelector(state => state.search)
    const dispatch = useAppDispatch()
    return (
        <Box height={500} mt={"24px"}>
            {/*Инициализация таблицы*/}
            <DataGrid onRowClick={(item) => {
                dispatch(setDescription(item.row))
                dispatch(fetchLanguages())
            }}
                      //Отключение лишних настроек таблицы
                      disableColumnResize
                      disableColumnFilter
                      disableColumnSelector
                      disableDensitySelector
                      disableColumnMenu
                      disableEval
                      editMode={'row'}
                      rows={search.results.items}
                      columns={columns} />
        </Box>
    )
}