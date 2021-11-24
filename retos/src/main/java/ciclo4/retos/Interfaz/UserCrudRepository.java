package ciclo4.retos.Interfaz;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import ciclo4.retos.Entidades.User;

public interface UserCrudRepository extends CrudRepository<User, Integer> {
    Optional<User> findByEmail(String email);
    Optional<User> findByEmailAndPassword(String email,String password);
    
}
