import { BoxPlot } from "../../types/db/boxPlot";

const generateRandomData = (length: number): number[] => {
    const data = Array.from({ length: length - 20 }, () => Math.floor(Math.random() * 40000)); 
    for (let i = 0; i < 10; i++) {
        data.push(Math.floor(Math.random() * 100000));
    }
    for (let i = 0; i < 10; i++) {
        data.push(Math.floor(Math.random() * -40000));
    }
    return data;
};

export class FakeService {
    async getDatos(): Promise<BoxPlot[]> {
        return [{ datos: generateRandomData(100) }]; 
    }
}