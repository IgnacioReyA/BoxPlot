import { BoxPlotController } from "../controller/boxPlotController";
import { FakeService } from "../db/fake/fakeService";
import { BoxPlotHandler } from "../handler/boxPlotHandler";
import express, {Request, Response, NextFunction} from 'express';
 
const router = express.Router();

const fakeService = new FakeService()
const boxPlotController = new BoxPlotController(fakeService);

const boxPlotHandler = new BoxPlotHandler(boxPlotController)

router.get('/', boxPlotHandler.getDatos.bind(boxPlotHandler));

export default router;
