package com.miguel.backend.controller;

import com.miguel.backend.model.Alumno;
import com.miguel.backend.services.implementations.AlumnoImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("")
@CrossOrigin("*")
public class Controller {

    @Autowired
    private AlumnoImpl service;

    @GetMapping("")
    public String prueba(){
        return "It works!";
    }

    @PostMapping("/alumno")
    public void save(@RequestBody Alumno alumno){
        service.save(alumno);
    }

    @GetMapping("/alumno")
    public List<Alumno> findAll(){
        return service.findAll();
    }

    @GetMapping("/alumno/{id}")
    public Optional<Alumno> findById(@PathVariable("id") int id){
        return service.findById(id);
    }

    @PutMapping("/alumno/{id}")
    public void updated(@RequestBody Alumno req, @PathVariable("id") int id){
        service.update(req, id);
    }

    @DeleteMapping("/alumno/{id}")
    public void deleteById(@PathVariable("id") int id){
        service.deleteById(id);
    }

}
