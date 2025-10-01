export default class CancelPedido {
  constructor(pedidoRepository, pedidoDetalleRepository, productoRepository) {
    this.pedidoRepository = pedidoRepository;
    this.pedidoDetalleRepository = pedidoDetalleRepository;
    this.productoRepository = productoRepository;
  }

  async execute(pedidoId) {
    const pedido = await this.pedidoRepository.findById(pedidoId);
    if (!pedido) throw new Error("Pedido no encontrado");

    if (pedido.estado === false) {
      throw new Error("El pedido ya está cancelado");
    }

    // Buscar detalles del pedido
    const detalles = await this.pedidoDetalleRepository.findByPedido(pedidoId);

    // Devolver stock de cada producto
    for (const detalle of detalles) {
      const producto = await this.productoRepository.findById(detalle.productoId);
      if (producto) {
        producto.stock += detalle.cantidad;
        await this.productoRepository.update(producto.id, { stock: producto.stock });
      }
    }

    // Cambiar estado del pedido (false = cancelado)
    const pedidoActualizado = await this.pedidoRepository.update(pedidoId, {
      estado: false,
    });

    return pedidoActualizado;
  }
}
