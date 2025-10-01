class Pedido {
    constructor({ id, usuarioId, total, estado, createdAt }) {
      if (!usuarioId) throw new Error("UsuarioID Invalido")
      if (!total || 1>total) throw new Error("Total Invalido")
      if (!estado || typeof estado !== "boolean" ) throw new Error("Estado Invalido")
      
      this.id = id;
      this.usuarioId = usuarioId;
      this.total = total;
      this.estado = estado;
      this.createdAt = createdAt;
    }
  }
export default Pedido;
  