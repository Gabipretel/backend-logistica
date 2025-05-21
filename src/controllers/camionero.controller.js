import Camionero from "../models/Camionero.js"

const createCamionero = async (req,res) => {
    try {
        if(!req.body || !req.body.cuil || !req.body.nombre || !req.body.telefono || !req.body.domicilio || !req.body.salario){
            return res.status(400).json({message: "Debe enviar todos los datos"})
        }
        const {cuil,nombre,telefono,domicilio,salario} = req.body;
        const newCamionero = await Camionero.create({ cuil,nombre,telefono,domicilio,salario });
        const sendCamionero = {
            ...newCamionero.toJSON(),
            message: "Camionero creado correctamente"
        }
        res.status(201).json(sendCamionero)
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
}

const getAllCamioneros = async (req,res) => {
    try {
        const camioneros = await Camionero.findAll();
        res.status(200).json(camioneros);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
}

const getCamioneroById = async (req,res) => {
    try {
        const {id} = req.params;
        const camionero = await Camionero.findByPk(id);
        if(!camionero){
            return res.status(404).json({ message: "Camionero no encontrado" });
        }
        res.status(200).json(camionero);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
}

const updateCamionero = async (req,res) => {
    try {
        const {id} = req.params;

        if (!req.body) {
            return res.status(400).json({ message: "Debe enviar al menos un campo a actualizar" });
        }

        const camionero = await Camionero.findByPk(id);
        if(camionero){
            const updateCamionero = await camionero.update(req.body);
            res.status(200).json(updateCamionero);
        }else{
            res.status(404).json({ message: "Camionero no encontrado" });
        }
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
}

const deleteCamionero = async (req,res) => {
    try {
        const {id} = req.params;
        const camionero = await Camionero.findByPk(id);
        if(!camionero){
            return res.status(404).json({ message: "Camionero no encontrado" });
        }
        await camionero.destroy({where:{id}});
        res.status(200).json({ message: "Camionero eliminado correctamente" });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
}


export {createCamionero,getAllCamioneros,getCamioneroById,updateCamionero, deleteCamionero}