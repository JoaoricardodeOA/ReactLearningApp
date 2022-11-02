package backend.learning.controller;

import java.io.Serializable;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import backend.learning.exception.ResourceNotFoundException;
import backend.learning.repository.Repositorio;
import backend.learning.model.Empregados;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmpregosController {
	@Autowired
	private Repositorio repositorio;
	@GetMapping("/Empregados")
	public List<Empregados> getTodos(){
		return repositorio.findAll();
	}
	@PostMapping("/Empregados")
	public Empregados createEmpregado(@RequestBody Empregados empregado) {
		return repositorio.save(empregado);
	}
	@GetMapping("/Empregados/{id}")
	public ResponseEntity<Empregados> getEmpregado(@PathVariable Long id) {
		Empregados e = repositorio.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Empregado não encontrado pelo ID: "+id));
		return ResponseEntity.ok(e);
	}
	@PutMapping("/Empregados/{id}")
	public ResponseEntity<Empregados> setEmpregado(@PathVariable Long id,@RequestBody Empregados empregado){
		Empregados e = repositorio.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Empregado não encontrado pelo ID: "+id));
		e.setFirstname(empregado.getFirstname());
		e.setLastname(empregado.getLastname());
		e.setEmail(empregado.getEmail());
		Empregados atualizados = repositorio.save(e);
		return ResponseEntity.ok(atualizados);
	}
	@DeleteMapping("/Empregados/{id}")
	public ResponseEntity<HttpStatus> deleteEmpregado(@PathVariable Long id){
		Empregados e = repositorio.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Empregado não encontrado pelo ID: "+id));
		repositorio.delete(e);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
}
