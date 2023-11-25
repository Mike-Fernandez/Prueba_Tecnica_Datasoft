package dev.datasoftpruebatecnica.prueba.Productos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductosService {
    private final ProductosRepository productosRepository;

    @Autowired
    public ProductosService(ProductosRepository productosRepository) {
        this.productosRepository = productosRepository;
    }

    public List<Productos> getProductos(){
        return productosRepository.findAll();
    }

    public Optional<Productos> unicoProducto(Integer prd_id){
        return productosRepository.findProductosByPrdId(prd_id);
    }

    public Optional<List<Productos>> productoByCat(Integer cat_id){
        return productosRepository.findProductosByCatId(cat_id);
    }
}
