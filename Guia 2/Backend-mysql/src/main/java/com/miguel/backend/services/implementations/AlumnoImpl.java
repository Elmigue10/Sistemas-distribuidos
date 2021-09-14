package com.miguel.backend.services.implementations;

import com.miguel.backend.model.Alumno;
import com.miguel.backend.repository.AlumnoDAO;
import com.miguel.backend.services.interfaces.AlumnoI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AlumnoImpl implements AlumnoI {

    @Autowired
    private AlumnoDAO alumnoDAO;

    @Override
    public void save(Alumno alumno) {
        alumnoDAO.save(alumno);
    }

    @Override
    public List<Alumno> findAll() {
        return (List<Alumno>) alumnoDAO.findAll();
    }

    @Override
    public Optional<Alumno> findById(int id) {
        return alumnoDAO.findById((long) id);
    }

    @Override
    public void update(Alumno alumno, int id) {
       Optional<Alumno> alumnoEncontrado = alumnoDAO.findById((long) id);
       Alumno alumnoToSave = alumnoEncontrado.get();

       alumnoToSave.setNombre(alumno.getNombre());
       alumnoToSave.setEdad(alumno.getEdad());

       alumnoDAO.save(alumnoToSave);

    }

    @Override
    public void deleteById(int id) {

        alumnoDAO.deleteById((long) id);

    }
}
