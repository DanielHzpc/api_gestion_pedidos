import Producto from '../../../domain/entities/Producto.js'

export default class CreateProducto {
    constructor(productoRepository) {
      this.productoRepository = productoRepository;
    }
  
    async execute(productoData) {
      const producto = new Producto(productoData)
      return await this.productoRepository.create(producto);
    }
}