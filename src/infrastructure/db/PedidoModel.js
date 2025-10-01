import mongoose from "mongoose";

const PedidoSchema = new mongoose.Schema({
  usuarioId: { type: String, required: true, minlength:24, maxlength: 24},
  total: {type: Number, required: true, min: 1},
  estado: {type: Boolean, required: true},
  createdAt: {type: Date, default: Date.now}
});

export const PedidoModel = mongoose.model("Pedido", PedidoSchema);
