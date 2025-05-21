import { app } from "./src/app/app.js";
import sequelize from "./src/db/connection.js";

const PORT = process.env.PORT || 3000;



const initServer = async () => {
    try {
        await sequelize.authenticate();
        console.log("✅ Conexión a la base de datos exitosa");
        await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
        await sequelize.sync({ force: false });
        console.log("✅ Modelos sincronizados con la base de datos");
        await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');

        app.listen(PORT, () => {
            console.log(`✅ Servidor funcionando en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("❌ Error al iniciar el servidor:", error);
        process.exit(1);
    }
};

initServer();
