class Producto {
    constructor({ id, nombre, descripcion, precio, stock, categoria, createdAt }) {
      if (!nombre || nombre.length<3) throw new Error("Nombre Invalido")
      if (!descripcion) throw new Error("Descripcion Invalida")
      if (!precio || 1>precio || typeof precio !== "number" || isNaN(precio)) throw new Error("Precio Invalido")
      if (!stock || 1>stock || !Number.isInteger(stock) || typeof stock !== "number") throw new Error("Stock Invalido")
      if (!categoria || categoria.length<3) throw new Error("Categoria Invalida")


      this.id = id;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.precio = precio
      this.stock = stock;
      this.categoria = categoria;
      this.createdAt = createdAt;
    }
  }
  export default Producto;
  