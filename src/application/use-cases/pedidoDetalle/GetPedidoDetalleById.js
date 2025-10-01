export default class GetPedidoDetalleById {
    constructor(pedidoDetalleRepository) {
      this.pedidoDetalleRepository = pedidoDetalleRepository;
    }
    async execute(id) {
      return await this.pedidoDetalleRepository.findById(id);
    }
  }
  