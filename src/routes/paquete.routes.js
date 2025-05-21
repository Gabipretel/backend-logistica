import { Router } from "express";
import { createPaquete, getAllPaquetes, getPaqueteById, updatePaquete, deletePaquete } from "../controllers/paquete.controller.js";

const routerPaquete = Router();

routerPaquete.post("/crear", createPaquete);
routerPaquete.get("/", getAllPaquetes);
routerPaquete.get("/:id", getPaqueteById);
routerPaquete.put("/:id", updatePaquete);
routerPaquete.delete("/:id", deletePaquete);

export default routerPaquete; 