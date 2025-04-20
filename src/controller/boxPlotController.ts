import {BoxPlot} from "../types/db/boxPlot"
import { IDBService } from "../db/types/dbService";

export class BoxPlotController {

    dbService: IDBService

    constructor(dbService: IDBService){
        this.dbService = dbService;
    }

    async getDatos(): Promise<BoxPlot[]>{
        return this.dbService.getDatos();
    }
}