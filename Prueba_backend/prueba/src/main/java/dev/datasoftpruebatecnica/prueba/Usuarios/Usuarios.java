package dev.datasoftpruebatecnica.prueba.Usuarios;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "usuarios")
@NoArgsConstructor
@AllArgsConstructor
public class Usuarios {
    @Id
    private int usr_id;
    private String usr_codigo;
    private String usr_nombre;
    private String usr_clave;
    private String usr_estado;
}
