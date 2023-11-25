package dev.datasoftpruebatecnica.prueba.Productos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductosRepository extends JpaRepository<Productos, Integer> {
    Optional<Productos> findProductosByPrdId(Integer prd_id);

    Optional<List<Productos>> findProductosByCatId(Integer prd_id);
}
