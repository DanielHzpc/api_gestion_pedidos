export default class GetPedidoDetallesByPedidoId {
  constructor(pedidoDetalleRepository) {
    this.pedidoDetalleRepository = pedidoDetalleRepository;
  }

  async execute(pedidoId) {
    if (!pedidoId) {
      throw new Error("pedidoId requerido");
    }

    const detalles = await this.pedidoDetalleRepository.findByPedido(pedidoId);

    if (!detalles || detalles.length === 0) {
      throw new Error("No se encontraron detalles para este pedido");
    }

    return detalles;
  }
}
