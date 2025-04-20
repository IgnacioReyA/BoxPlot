import {BoxPlot} from "../../types/db/boxPlot"

const generateRandomData = (length: number): number[] => {
    return Array.from({ length }, () => Math.random()); // Genera números aleatorios (cualquier número entre 0 y 1)
};

const DATOS = [
    {
        datos: generateRandomData(100)
    }
]

export class FakeService {
    async getDatos(datos: number[]): Promise<BoxPlot[]> {
        return DATOS;
    }
}