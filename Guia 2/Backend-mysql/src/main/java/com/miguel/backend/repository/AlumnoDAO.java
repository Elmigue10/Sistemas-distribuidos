package com.miguel.backend.repository;

import com.miguel.backend.model.Alumno;
import org.springframework.data.repository.CrudRepository;

public interface AlumnoDAO extends CrudRepository<Alumno, Long> {

}
