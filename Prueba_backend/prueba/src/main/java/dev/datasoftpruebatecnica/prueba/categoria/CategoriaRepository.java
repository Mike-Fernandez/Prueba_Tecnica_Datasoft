package dev.datasoftpruebatecnica.prueba.categoria;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CategoriaRepository extends JpaRepository<Categorias, Integer> {
//    Optional<Categorias> findCategoriasByCat_id(Integer id);
}
