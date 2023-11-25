package dev.datasoftpruebatecnica.prueba.Productos;

import dev.datasoftpruebatecnica.prueba.categoria.Categorias;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table (name = "productos")
@Data
public class Productos {
    @Id
    @Column(name = "prd_id")
    private int prdId;
    private String prd_nombre;
    private String prd_descripcion;
    private float prd_precio;
    private String prd_imagen;
    private String prd_estado;
    //TODO: Conectar las dos tablas de categoria y producto
    @Column(name = "prd_cat_id")
    private int catId;
}
