import sequelize from "../db/connection.js";
import { DataTypes } from "sequelize";

const Provincia = sequelize.define(
    "Provincia",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    },
    { tableName: "provincias", timestamps: true }
);
export default Provincia;
