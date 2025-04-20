import { BoxPlot } from "../types/db/boxPlot";
import { IDBService } from "../db/types/dbService";

export class BoxPlotController {
    dbService: IDBService;

    constructor(dbService: IDBService) {
        this.dbService = dbService;
    }

    async getDatos(): Promise<any> {
        const data = await this.dbService.getDatos();
        const numbers = data[0].datos; 

        const boxPlot = this.calculateBoxPlot(numbers);

        return boxPlot;
    }

    private calculateBoxPlot(numbers: number[]): {
        min: number;
        max: number;
        median: number;
        firstQuartile: number;
        thirdQuartile: number;
        outliers: number[];
    } {
        const sorted = [...numbers].sort((a, b) => a - b);

        const median = (arr: number[]): number => {
            const mid = Math.floor(arr.length / 2);
            return arr.length % 2 === 0
                ? (arr[mid - 1] + arr[mid]) / 2
                : arr[mid];
        };

        const midIndex = Math.floor(sorted.length / 2);
        const lowerHalf = sorted.slice(0, midIndex);
        const upperHalf = sorted.length % 2 === 0
            ? sorted.slice(midIndex)
            : sorted.slice(midIndex + 1);

        const q1 = median(lowerHalf); 
        const q3 = median(upperHalf); 
        const iqr = q3 - q1; 

        const lowerBound = q1 - 1.5 * iqr;
        const upperBound = q3 + 1.5 * iqr;

        const outliers = sorted.filter(num => num < lowerBound || num > upperBound);

        return {
            min: sorted[0],
            max: sorted[sorted.length - 1],
            median: median(sorted),
            firstQuartile: q1,
            thirdQuartile: q3,
            outliers,
        };
    }
}