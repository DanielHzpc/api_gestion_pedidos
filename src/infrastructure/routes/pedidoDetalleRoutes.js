import { Router } from "express";

import {
  getPedidoDetalleById,
  getPedidosDetalles,
  getPedidoDetalleByPedidoId
} from "../controllers/pedidoDetalleController.js";

import { authMiddleware } from "../../interfaces/middlewares/authMiddleware.js";

const router = Router();
router.get("/:id", getPedidoDetalleById);
router.get("/order/:id", getPedidoDetalleByPedidoId);
router.get("/", authMiddleware, getPedidosDetalles);

export default router