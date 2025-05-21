import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';

const CamioneroCamion = sequelize.define('CamioneroCamion', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    camioneroId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'camioneros',
            key: 'id'
        }
    },
    camionId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'camiones',
            key: 'id'
        }
    }
}, {
    tableName: 'camionero_camion',
    timestamps: true
});

export default CamioneroCamion;