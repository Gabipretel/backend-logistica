import { Router } from "express";
import { createCamion,getAllCamiones,getCamionById,deleteCamion,updateCamion} from "../controllers/camion.controller.js";

const routerCamion = Router();

routerCamion.post("/crear",createCamion);
routerCamion.get("/",getAllCamiones);
routerCamion.get("/:id",getCamionById)
routerCamion.delete("/:id",deleteCamion)
routerCamion.put("/:id",updateCamion)

export default routerCamion;