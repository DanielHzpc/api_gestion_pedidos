import express from "express";
import usuarioRoutes from "../infrastructure/routes/usuarioRoutes.js";
import loginRoutes from "../infrastructure/routes/loginRoutes.js"
import registerRoutes from "../infrastructure/routes/registerRoutes.js"
import pedidoRoutes from "../infrastructure/routes/pedidoRoutes.js"
import pedidoDetallesRoutes from "../infrastructure/routes/pedidoDetalleRoutes.js"
import productoRoutes from "../infrastructure/routes/productoRoutes.js"

const app = express();
app.use(express.json());
app.use("/api/orders", pedidoRoutes);
app.use("/api/ordersDetails", pedidoDetallesRoutes);
app.use("/api/products", productoRoutes);
app.use("/api/users", usuarioRoutes);
app.use("/api/auth/register", registerRoutes)
app.use("/api/auth/login", loginRoutes)
export default app;