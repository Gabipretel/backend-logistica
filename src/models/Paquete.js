import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js";

const Paquete = sequelize.define(
    "Paquete",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        codigo: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        nombre_destinatario: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        domicilio: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        provinciaId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "provincias",
                key: "id",
            },
        },
        camioneroId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "camioneros",  
                key: "id",
            },
        },
    },
    { tableName: "paquetes", timestamps: true }
);
export default Paquete;
