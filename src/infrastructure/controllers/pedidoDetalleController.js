import GetPedidoDetalles from "../../application/use-cases/pedidoDetalle/GetPedidoDetalles.js";
import GetPedidoDetalleById from "../../application/use-cases/pedidoDetalle/GetPedidoDetalleById.js";
import GetPedidoDetalleByPedidoId from "../../application/use-cases/pedidoDetalle/GetPedidoDetalleByPedidoId.js";


import PedidoDetalleRepositoryMongo from "../repositories/PedidoDetalleRepositoryMongo.js";

const pedidoDetalleRepository = new PedidoDetalleRepositoryMongo();

export const getPedidosDetalles = async (req, res) => {
  try {
    const getPedidosDetalles = new GetPedidoDetalles(pedidoDetalleRepository);
    const pedidosDetalles = await getPedidosDetalles.execute();
    res.json(pedidosDetalles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPedidoDetalleById = async (req, res) => {
  try {
    const getPedidoDetalleById = new GetPedidoDetalleById(pedidoDetalleRepository);
    const pedidoDetalle = await getPedidoDetalleById.execute(req.params.id);
    if (!pedidoDetalle) return res.status(404).json({ message: "Pedido Detalle no encontrado" });
    res.json(pedidoDetalle);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPedidoDetalleByPedidoId = async (req, res) => {
  try {
    const getPedidoDetalleByPedidoId = new GetPedidoDetalleByPedidoId(pedidoDetalleRepository);
    const pedidoDetalle = await getPedidoDetalleByPedidoId.execute(req.params.id);
    if (!pedidoDetalle) return res.status(404).json({ message: "Pedido Detalles no encontrado" });
    res.json(pedidoDetalle);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};