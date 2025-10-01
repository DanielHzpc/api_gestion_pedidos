import mongoose from "mongoose";

const ProductoSchema = new mongoose.Schema({
  nombre: { type: String, required: true, minlength:4, maxlength: 18},
  descripcion: { type: String, required: true, minlength:4, maxlength: 100},
  precio: { type: mongoose.Schema.Types.Decimal128, required: true},
  stock: { type: Number, required: true, min:1},
  categoria: { type: String, required: true, minlength:4, maxlength: 24},
  createdAt: {type: Date, default: Date.now}
});

export const ProductoModel = mongoose.model("Producto", ProductoSchema);
