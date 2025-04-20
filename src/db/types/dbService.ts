import {BoxPlot} from "../../types/db/boxPlot"

export interface IDBService {
    getDatos(datos: number[]): Promise<BoxPlot[]>
}