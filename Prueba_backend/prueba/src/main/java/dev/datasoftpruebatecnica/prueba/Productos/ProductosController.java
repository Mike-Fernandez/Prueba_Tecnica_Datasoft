package dev.datasoftpruebatecnica.prueba.Productos;

import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("productos")
@RestController
@CrossOrigin(origins = "*")
public class ProductosController {
    private final ProductosService productosService;

    @Autowired
    public ProductosController(ProductosService productosService) {
        this.productosService = productosService;
    }

    @GetMapping
    public ResponseEntity<List<Productos>> getProductos(){
        return new ResponseEntity<List<Productos>>(productosService.getProductos(), HttpStatus.OK);
    }

    @GetMapping("/{prd_id}")
    public ResponseEntity<Optional<Productos>> getSingleProducto(@PathVariable Integer prd_id){
        return new ResponseEntity<Optional<Productos>>(productosService.unicoProducto(prd_id), HttpStatus.OK);
    }
    @GetMapping("/cat/{cat_id}")
    public ResponseEntity<Optional<List<Productos>>> getProductoCat(@PathVariable Integer cat_id){
        return new ResponseEntity<Optional<List<Productos>>>(productosService.productoByCat(cat_id), HttpStatus.OK);
    }
}
