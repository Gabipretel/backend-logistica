import Provincia from "../models/Provincia.js";

const createProvincia = async (req,res) => {
    try {
        const {nombre} = req.body;
        const newProvincia = await Provincia.create({ nombre });
        res.status(201).json(newProvincia)
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
}

const getAllProvincias = async (req,res) => {
    try {
        const provincias = await Provincia.findAll();
        res.status(200).json(provincias);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
}

const getProvinciaById = async (req,res) => {
    try {
        const {id} = req.params;
        const provincia = await Provincia.findByPk(id);
        if(!provincia){
            return res.status(404).json({ message: "Provincia no encontrada" });
        }
        res.status(200).json(provincia);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
}

const updateProvincia = async (req,res) => {
    try {
        const {id} = req.params;

        if (!req.body || !req.body.nombre) {
            return res.status(400).json({ message: "El nombre es requerido" });
        }
        const { nombre } = req.body;

        const provincia = await Provincia.findByPk(id);
        if(provincia){
            const updateProvincia = await provincia.update({nombre});
            res.status(200).json(updateProvincia);
        }else{
            res.status(404).json({ message: "Provincia no encontrada" });
        }
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
}

const deleteProvince = async (req,res) => {
    try {
        const {id} = req.params;
        console.log(id,'ID')
        const provincia = await Provincia.findByPk(id);
        if(!provincia){
            return res.status(404).json({ message: "Provincia no encontrada" });
        }
        await provincia.destroy({where:{id}});
        res.status(200).json({ message: "Provincia eliminada correctamente" });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
}


export {createProvincia,getAllProvincias,getProvinciaById, updateProvincia,deleteProvince}