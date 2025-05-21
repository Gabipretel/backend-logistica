import Camion from "../models/Camion.js";

const createCamion = async (req,res) => {
    try {
        const {dominio,marca,modelo,capacidad_carga} = req.body;
        const newCamion = await Camion.create({ dominio,marca,modelo,capacidad_carga });
        const sendCamion = {
            ...newCamion.toJSON(),
            message: "Camion creado correctamente"
        }
        res.status(201).json(sendCamion)
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
}

const getAllCamiones = async (req,res) => {
    try {
        const camiones = await Camion.findAll();
        res.status(200).json(camiones);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
}

const getCamionById = async (req,res) => {
    try {
        const {id} = req.params;
        const camion = await Camion.findByPk(id);
        if(!camion){
            return res.status(404).json({ message: "Camion no encontrado" });
        }
        res.status(200).json(camion);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
}

const updateCamion = async (req,res) => {
    try {
        const {id} = req.params;

        if (!req.body || !req.body.dominio || !req.body.marca || !req.body.modelo || !req.body.capacidad_carga) {
            return res.status(400).json({ message: "Todos los campos son requeridos" });
        }
        const { dominio,marca,modelo,capacidad_carga } = req.body;

        const camion = await Camion.findByPk(id);
        if(camion){
            const updateCamion = await camion.update({dominio,marca,modelo,capacidad_carga});
            res.status(200).json(updateCamion);
        }else{
            res.status(404).json({ message: "Camion no encontrado" });
        }
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
}

const deleteCamion = async (req,res) => {
    try {
        const {id} = req.params;
        console.log(id,'ID')
        const camion = await Camion.findByPk(id);
        if(!camion){
            return res.status(404).json({ message: "Camion no encontrado" });
        }
        await camion.destroy({where:{id}});
        res.status(200).json({ message: "Camion eliminado correctamente" });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
}


export {createCamion,getAllCamiones,getCamionById,deleteCamion,updateCamion}