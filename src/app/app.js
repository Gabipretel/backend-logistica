import express from 'express';
import routerProvincia from '../routes/provincia.routes.js';
import routerCamion from '../routes/camion.routes.js';
import routerCamionero from '../routes/camionero.routes.js';
import routerPaquete from '../routes/paquete.routes.js';
import routerCamioneroCamion from '../routes/camioneroCamion.routes.js';
export const app = express();
app.use(express.json());

app.use('/api/v1/provincia',routerProvincia);
app.use('/api/v1/camion',routerCamion);
app.use('/api/v1/camionero',routerCamionero);
app.use('/api/v1/paquete', routerPaquete);
app.use('/api/v1/asignaciones', routerCamioneroCamion);