import mongoose from "mongoose";

const PedidoDetalleSchema = new mongoose.Schema({
  pedidoId: { type: mongoose.Schema.Types.ObjectId, ref: "Pedido", required: true },
  productoId: { type: mongoose.Schema.Types.ObjectId, ref: "Producto", required: true },
  cantidad: { type: Number, required: true, min: 1 },
  precioUnitario: { type: Number, required: true },
  subtotal: { type: Number, required: true }
});

export const PedidoDetalleModel = mongoose.model("PedidoDetalle", PedidoDetalleSchema);
