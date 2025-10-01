import { Router } from "express";

import {
  createPedido,
  getPedidos,
  getPedidoById,
  updatePedido,
  cancelarPedido
} from "../controllers/pedidoController.js";

import { authMiddleware } from "../../interfaces/middlewares/authMiddleware.js";

const router = Router();
router.post("/", createPedido);
router.get("/", authMiddleware, getPedidos);
router.get("/:id", getPedidoById);
router.put("/:id", updatePedido);
router.delete("/:id/cancel", cancelarPedido);

export default router