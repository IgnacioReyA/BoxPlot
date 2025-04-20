import {BoxPlot} from "../../types/db/boxPlot"

export interface IDBService {
    getDatos(): Promise<BoxPlot[]>
}