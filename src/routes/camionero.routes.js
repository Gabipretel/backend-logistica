import { Router } from "express";
import { createCamionero,getAllCamioneros,getCamioneroById, updateCamionero,deleteCamionero } from "../controllers/camionero.controller.js";

const routerCamionero = Router();

routerCamionero.post("/crear",createCamionero);
routerCamionero.get("/",getAllCamioneros);
routerCamionero.get("/:id",getCamioneroById)
routerCamionero.put("/:id",updateCamionero)
routerCamionero.delete("/:id",deleteCamionero)

export default routerCamionero;