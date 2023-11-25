package dev.datasoftpruebatecnica.prueba.categoria;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoriaService {

    private final CategoriaRepository categoriaRepository;

    @Autowired
    public CategoriaService(CategoriaRepository categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }

    public List<Categorias> getCategorias(){
        return categoriaRepository.findAll();
    }

//   public Optional<Categorias> getCategoriaById(Integer id){
//        return categoriaRepository.findCategoriasByCat_id(id);
//    }
}
