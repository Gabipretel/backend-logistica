import { Router } from "express";
import {
    asignCamion,
    getAllAsigns,
    getAsignsPorCamionero,
    getAsignsPorCamion,
    deleteAsign
} from "../controllers/camioneroCamion.controller.js";

const routerCamioneroCamion = Router();

routerCamioneroCamion.post("/asignar", asignCamion);

routerCamioneroCamion.get("/", getAllAsigns);

routerCamioneroCamion.get("/camionero/:camioneroId", getAsignsPorCamionero);

routerCamioneroCamion.get("/camion/:camionId", getAsignsPorCamion);

routerCamioneroCamion.delete("/:id", deleteAsign);

export default routerCamioneroCamion;