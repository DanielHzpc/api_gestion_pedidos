export default class GetPedidoWithDetallesById {
  constructor(pedidoRepository, pedidoDetalleRepository) {
    this.pedidoRepository = pedidoRepository;
    this.pedidoDetalleRepository = pedidoDetalleRepository;
  }

  async execute(pedidoId) {
    if (!pedidoId) throw new Error("pedidoId requerido");

    // Buscar pedido
    const pedido = await this.pedidoRepository.findById(pedidoId);
    if (!pedido) throw new Error("Pedido no encontrado");

    // Buscar detalles relacionados
    const detalles = await this.pedidoDetalleRepository.findByPedido(pedidoId);

    // Retornar pedido con sus detalles
    return {
      ...pedido.toObject(), // si usas mongoose, convierte el documento
      detalles,
    };
  }
}
