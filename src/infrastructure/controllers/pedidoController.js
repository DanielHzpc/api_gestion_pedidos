import CreatePedido from "../../application/use-cases/pedido/CreatePedido.js";
import GetPedidos from "../../application/use-cases/pedido/GetPedidos.js";
import GetPedidoWithDetallesById from "../../application/use-cases/pedido/GetPedidoWithDetallesById.js";
import UpdatePedido from "../../application/use-cases/pedido/UpdatePedido.js";
import CancelPedido from "../../application/use-cases/pedido/CancelPedido.js";

import PedidoRepositoryMongo from "../repositories/PedidoRepositoryMongo.js";
import PedidoDetalleRepositoryMongo from "../repositories/PedidoDetalleRepositoryMongo.js";
import ProductoRepositoryMongo from "../repositories/ProductoRepositoryMongo.js";

const pedidoRepository = new PedidoRepositoryMongo();
const pedidoDetalleRepository = new PedidoDetalleRepositoryMongo();
const productoRepository = new ProductoRepositoryMongo();

const createPedidoUC = new CreatePedido(
  pedidoRepository,
  pedidoDetalleRepository,
  productoRepository
);

const cancelPedido = new CancelPedido(
  pedidoRepository,
  pedidoDetalleRepository,
  productoRepository
);

export const createPedido = async (req, res) => {
  try {
    const { usuarioId, productos } = req.body;
    const result = await createPedidoUC.execute({ usuarioId, productos });
    res.status(201).json(result); // pedido + detalles
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getPedidos = async (req, res) => {
  try {
    const getPedidos = new GetPedidos(pedidoRepository);
    const pedidos = await getPedidos.execute();
    res.json(pedidos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPedidoById = async (req, res) => {
  try {
    const getPedidoById = new GetPedidoWithDetallesById(pedidoRepository, pedidoDetalleRepository);
    const pedido = await getPedidoById.execute(req.params.id);
    if (!pedido) return res.status(404).json({ message: "Pedido no encontrado" });
    res.json(pedido);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updatePedido = async (req, res) => {
  try {
    const updatePedido = new UpdatePedido(pedidoRepository);
    const pedido = await updatePedido.execute(req.params.id, req.body);
    if (!pedido) return res.status(404).json({ message: "Pedido no encontrado" });
    res.json(pedido);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



export async function cancelarPedido(req, res) {
  try {
    const { id } = req.params;
    const result = await cancelPedido.execute(id);
    res.status(200).json({
      message: "Pedido cancelado correctamente",
      pedido: result,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}