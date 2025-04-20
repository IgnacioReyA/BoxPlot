import { BoxPlot } from "../../types/db/boxPlot";

const generateRandomData = (length: number): number[] => {
    return Array.from({ length }, () => Math.floor(Math.random() * 100000)); 
};

export class FakeService {
    async getDatos(): Promise<BoxPlot[]> {
        return [{ datos: generateRandomData(100) }]; 
    }
}