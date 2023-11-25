package dev.datasoftpruebatecnica.prueba.categoria;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("categorias")
@RestController
@CrossOrigin("*")
public class CategoriaController {
    private final CategoriaService categoriaService;

    @Autowired
    public CategoriaController(CategoriaService categoriaService){
        this.categoriaService = categoriaService;
    }
    @GetMapping
    public ResponseEntity<List<Categorias>> getCategorias(){
//        return categoriaService.getCategorias();
        return new ResponseEntity<List<Categorias>>(categoriaService.getCategorias(), HttpStatus.OK);
    }

//    @GetMapping("/{id}")
//    public ResponseEntity<Optional<Categorias>> getCategoriaById(@PathVariable Integer id){
//       return new ResponseEntity<Optional<Categorias>>(categoriaService.getCategoriaById(id), HttpStatus.OK);
//    }
}
