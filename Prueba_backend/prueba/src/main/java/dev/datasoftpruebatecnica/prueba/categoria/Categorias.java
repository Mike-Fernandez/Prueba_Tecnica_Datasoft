package dev.datasoftpruebatecnica.prueba.categoria;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table (name = "categorias")
@Data
public class Categorias {
    @Id
    private int cat_id;
    private String cat_nombre;

    public Categorias(String cat_nombre) {
        this.cat_nombre = cat_nombre;
    }

    public int getCat_id() {
        return cat_id;
    }

    public void setCat_id(int cat_id) {
        this.cat_id = cat_id;
    }

    public String getCat_nombre() {
        return cat_nombre;
    }

    public void setCat_nombre(String cat_nombre) {
        this.cat_nombre = cat_nombre;
    }
}
