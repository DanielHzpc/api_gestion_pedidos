import { Router } from "express";

import {
  getUsuarios,
  getUsuarioById,
  updateUsuario,
  deleteUsuario
} from "../controllers/usuarioController.js";

import { authMiddleware } from "../../interfaces/middlewares/authMiddleware.js";

const router = Router();
router.get("/", authMiddleware, getUsuarios);
router.get("/:id", getUsuarioById);
router.put("/:id", updateUsuario);
router.delete("/:id", deleteUsuario);

export default router