import { BoxPlotController } from "../controller/boxPlotController";
import express, { Request, Response } from "express";

export class BoxPlotHandler {
    boxPlotController: BoxPlotController;

    constructor(boxPlotController: BoxPlotController) {
        this.boxPlotController = boxPlotController;
    }

    async getDatos(request: Request, response: Response) {
        try {
            const box = await this.boxPlotController.getDatos();
            response.json(box);
        } catch (error) {
            response.status(500).json({ error: "an error" });
        }
    }
}