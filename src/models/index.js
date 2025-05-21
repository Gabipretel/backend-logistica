import Camion from "./Camion";
import Camionero from "./Camionero";
import CamioneroCamion from "./CamioneroCamion";
import Paquete from "./Paquete";
import Provincia from "./Provincia";

// Relaciones de las tablas basadas en el DER.

// Camionero - Paquete (1:N)

Camionero.hasMany(Paquete,{
    foreignKey: "camioneroId"
})

Paquete.belongsTo(Camionero,{
    foreignKey: "camioneroId"
})

// Provincia - Paquete (1:N)
Provincia.hasMany(Paquete, {
    foreignKey: 'provinciaId'
});
Paquete.belongsTo(Provincia, {
    foreignKey: 'provinciaId'
});

// Camionero - Camion (N:M)
Camionero.belongsToMany(Camion, {
    through: CamioneroCamion,
});
Camion.belongsToMany(Camionero, {
    through: CamioneroCamion,
});

export { Camion, Camionero, CamioneroCamion, Paquete, Provincia };
