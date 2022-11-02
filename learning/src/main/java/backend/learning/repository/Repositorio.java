package backend.learning.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import backend.learning.model.Empregados;

@Repository
public interface Repositorio extends JpaRepository<Empregados, Long>{

}
