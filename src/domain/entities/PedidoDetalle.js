class PedidoDetalle {
    constructor({ id, pedidoId, productoId, cantidad, precioUnitario, subtotal }) {

      if (!productoId) throw new Error("ProductoId Invalido")
      if (!cantidad || 1>cantidad) throw new Error("Cantidad Invalido")
      if (!precioUnitario || 1>precioUnitario) throw new Error("Precio Unitario Invalido")

      
      this.id = id;
      this.pedidoId = pedidoId;
      this.productoId = productoId;
      this.cantidad = cantidad;
      this.precioUnitario = precioUnitario;
      this.subtotal = subtotal;
    }
  }
export default PedidoDetalle;
  