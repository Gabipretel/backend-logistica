import Paquete from "../models/Paquete.js";
import Provincia from "../models/Provincia.js";
import Camionero from "../models/Camionero.js";

const createPaquete = async (req, res) => {
    try {
        if (!req.body || !req.body.codigo || !req.body.nombre_destinatario || !req.body.domicilio || !req.body.provinciaId || !req.body.camioneroId) {
            return res.status(400).json({ message: "Debe enviar todos los datos requeridos" });
        }

        const { codigo, descripcion, nombre_destinatario, domicilio, provinciaId, camioneroId } = req.body;

        const provincia = await Provincia.findByPk(provinciaId);
        if (!provincia) {
            return res.status(404).json({ message: "La provincia especificada no existe" });
        }

        const camionero = await Camionero.findByPk(camioneroId);
        if (!camionero) {
            return res.status(404).json({ message: "El camionero especificado no existe" });
        }

        const newPaquete = await Paquete.create({
            codigo,
            descripcion,
            nombre_destinatario,
            domicilio,
            provinciaId,
            camioneroId
        });

        const sendPaquete = {
            ...newPaquete.toJSON(),
            message: "Paquete creado correctamente"
        };

        res.status(201).json(sendPaquete);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
};

const getAllPaquetes = async (req, res) => {
    try {
        const paquetes = await Paquete.findAll();
        res.status(200).json(paquetes);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
};

const getPaqueteById = async (req, res) => {
    try {
        const { id } = req.params;
        const paquete = await Paquete.findByPk(id);

        if (!paquete) {
            return res.status(404).json({ message: "Paquete no encontrado" });
        }

        res.status(200).json(paquete);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
};

const updatePaquete = async (req, res) => {
    try {
        const { id } = req.params;

        if (!req.body) {
            return res.status(400).json({ message: "Debe enviar al menos un campo a actualizar" });
        }

        const paquete = await Paquete.findByPk(id);
        if (!paquete) {
            return res.status(404).json({ message: "Paquete no encontrado" });
        }


        if (req.body.provinciaId) {
            const provincia = await Provincia.findByPk(req.body.provinciaId);
            if (!provincia) {
                return res.status(404).json({ message: "La provincia especificada no existe" });
            }
        }


        if (req.body.camioneroId) {
            const camionero = await Camionero.findByPk(req.body.camioneroId);
            if (!camionero) {
                return res.status(404).json({ message: "El camionero especificado no existe" });
            }
        }

        const updatedPaquete = await paquete.update(req.body);
        res.status(200).json(updatedPaquete);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
};

const deletePaquete = async (req, res) => {
    try {
        const { id } = req.params;
        const paquete = await Paquete.findByPk(id);
        
        if (!paquete) {
            return res.status(404).json({ message: "Paquete no encontrado" });
        }

        await paquete.destroy();
        res.status(200).json({ message: "Paquete eliminado correctamente" });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
};

export {
    createPaquete,
    getAllPaquetes,
    getPaqueteById,
    updatePaquete,
    deletePaquete
}; 