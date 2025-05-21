import { Router } from "express";
import { createProvincia,getAllProvincias,getProvinciaById,updateProvincia,deleteProvince } from "../controllers/provincia.controller.js";

const routerProvincia = Router();

routerProvincia.post("/crear",createProvincia);
routerProvincia.get("/todas",getAllProvincias);
routerProvincia.get("/:id",getProvinciaById);
routerProvincia.put("/:id",updateProvincia);
routerProvincia.delete("/:id",deleteProvince);

export default routerProvincia;