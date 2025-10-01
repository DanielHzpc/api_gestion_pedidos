import {PedidoDetalleModel} from "../db/PedidoDetalleModel.js";

export default class PedidoDetalleRepositoryMongo {
  async create(pedidoDetalleData) {
    const pedidoDetalle = new PedidoDetalleModel(pedidoDetalleData)
    return await pedidoDetalle.save();
  }

  async findAll() {
    return await PedidoDetalleModel.find();
  }
  
  async findById(id) {
    return await PedidoDetalleModel.findById(id);
  }

  async findByPedido(pedidoId) {
    return await PedidoDetalleModel.find({ pedidoId });
  }
}
