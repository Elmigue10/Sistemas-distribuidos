package com.miguel.backend.services.interfaces;

import com.miguel.backend.model.Alumno;

import java.util.List;
import java.util.Optional;

public interface AlumnoI {

    public void save (Alumno alumno);
    public List<Alumno> findAll();
    public Optional<Alumno> findById(int id);
    public void update(Alumno alumno, int id);
    public void deleteById(int id);

}
