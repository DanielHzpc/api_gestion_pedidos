export default class GetPedidoDetalles {
    constructor(pedidoDetalleRepository) {
      this.pedidoDetalleRepository = pedidoDetalleRepository;
    }
    async execute() {
      return await this.pedidoDetalleRepository.findAll();
    }
  }