import CamioneroCamion from "../models/CamioneroCamion.js";
import Camionero from "../models/Camionero.js";
import Camion from "../models/Camion.js";

const asignCamion = async (req, res) => {
    try {
        const { camioneroId, camionId } = req.body;

        const camionero = await Camionero.findByPk(camioneroId);
        if (!camionero) {
            return res.status(404).json({ message: "Camionero no encontrado" });
        }

        const camion = await Camion.findByPk(camionId);
        if (!camion) {
            return res.status(404).json({ message: "Camión no encontrado" });
        }

        const nuevaAsignacion = await CamioneroCamion.create({
            camioneroId,
            camionId
        });

        const asignacionConDatos = await CamioneroCamion.findByPk(nuevaAsignacion.id);

        res.status(201).json({
            message: "Camión asignado correctamente",
            asignacion: asignacionConDatos
        });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
};


const getAllAsigns = async (req, res) => {
    try {
        const asignaciones = await CamioneroCamion.findAll();
        res.status(200).json(asignaciones);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
};

const getAsignsPorCamionero = async (req, res) => {
    try {
        const { camioneroId } = req.params;

        const camionero = await Camionero.findByPk(camioneroId);
        if (!camionero) {
            return res.status(404).json({ message: "Camionero no encontrado" });
        }

        const asignaciones = await CamioneroCamion.findAll();

        res.status(200).json(asignaciones);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
};


const getAsignsPorCamion = async (req, res) => {
    try {
        const { camionId } = req.params;

        const camion = await Camion.findByPk(camionId);
        if (!camion) {
            return res.status(404).json({ message: "Camión no encontrado" });
        }

        const asignaciones = await CamioneroCamion.findAll();

        res.status(200).json(asignaciones);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
};


const deleteAsign = async (req, res) => {
    try {
        const { id } = req.params;
        
        const asignacion = await CamioneroCamion.findByPk(id);
        if (!asignacion) {
            return res.status(404).json({ message: "Asignación no encontrada" });
        }

        await asignacion.destroy();
        res.status(200).json({ message: "Asignación eliminada correctamente" });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
};

export {
    asignCamion,
    getAllAsigns,
    getAsignsPorCamionero,
    getAsignsPorCamion,
    deleteAsign
};