import Pedido from "../../../domain/entities/Pedido.js";
import PedidoDetalle from "../../../domain/entities/PedidoDetalle.js";

export default class CreatePedido {
  constructor(pedidoRepository, pedidoDetalleRepository, productoRepository) {
    this.pedidoRepository = pedidoRepository;
    this.pedidoDetalleRepository = pedidoDetalleRepository;
    this.productoRepository = productoRepository;
  }

  async execute({ usuarioId, productos }) {
    if (!usuarioId) throw new Error("Usuario inválido");
    if (!Array.isArray(productos) || productos.length === 0) {
      throw new Error("Debe incluir al menos un producto");
    }

    let total = 0;
    const detalles = [];

    // 1. Validar productos y stock
    for (const item of productos) {
      const producto = await this.productoRepository.findById(item.productoId);
      if (!producto) throw new Error(`Producto ${item.productoId} no encontrado`);
      if (producto.stock < item.cantidad) {
        throw new Error(`Stock insuficiente para ${producto.nombre}`);
      }

      const subtotal = producto.precio * item.cantidad;
      total += subtotal;

      // Aquí instanciamos la entidad PedidoDetalle para validar
      const detalle = new PedidoDetalle({
        pedidoId: null, // aún no existe el pedido
        productoId: producto.id,
        cantidad: item.cantidad,
        precioUnitario: producto.precio,
        subtotal,
      });

      detalles.push(detalle);
    }

    // 2. Crear Pedido
    const pedido = new Pedido({
      usuarioId,
      total,
      estado: true,
      createdAt: new Date(),
    });

    const pedidoCreado = await this.pedidoRepository.create(pedido);

    // 3. Guardar detalles con el pedidoId real y actualizar stock
    for (const det of detalles) {
      det.pedidoId = pedidoCreado.id; // ahora sí le asignamos el pedidoId
      await this.pedidoDetalleRepository.create(det);

      // Restar stock
      await this.productoRepository.update(det.productoId, {
        $inc: { stock: -det.cantidad },
      });
    }

    // 4. Retornar pedido + detalles
    return {
      pedido: pedidoCreado,
      detalles,
    };
  }
}
