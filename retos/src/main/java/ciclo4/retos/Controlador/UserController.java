package ciclo4.retos.Controlador;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import ciclo4.retos.Servicios.UserService;
import ciclo4.retos.Entidades.User;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="*")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/user/all")
    public List<User> getAll(){
        return userService.getAll();
    }

    @PostMapping("/user/new")
    @ResponseStatus(HttpStatus.CREATED)
    public User registrar(@RequestBody User user){
        return userService.registrar(user);
    }

    @GetMapping("/user/{email}/{password}")
    public User autenticarUsuario(@PathVariable("email") String email, @PathVariable("password") String password){
        return userService.autenticarUsuario(email,password);
    }

    @GetMapping("/user/{email}")
    public boolean existeEmail(@PathVariable("email") String email){
        return userService.existeEmail(email);
    }
    
}
