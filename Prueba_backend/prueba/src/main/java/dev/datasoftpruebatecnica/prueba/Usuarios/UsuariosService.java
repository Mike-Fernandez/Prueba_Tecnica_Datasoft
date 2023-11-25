package dev.datasoftpruebatecnica.prueba.Usuarios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuariosService {
    private final UsuariosRepository usuariosRepository;

    @Autowired
    public UsuariosService(UsuariosRepository usuariosRepository) {
        this.usuariosRepository = usuariosRepository;
    }

    public List<Usuarios> getUsuarios(){
        return usuariosRepository.findAll();
    }
}
