// infrastructure/controllers/AuthController.js
import CreateUsuario from "../../application/use-cases/usuario/CreateUsuario.js";
import UsuarioRepositoryMongo from "../../infrastructure/repositories/UsuarioRepositoryMongo.js";
import PasswordEncrypter from "../../infrastructure/security/password_encrypter.js";

const usuarioRepository = new UsuarioRepositoryMongo();
const passwordEncrypter = new PasswordEncrypter();
const createUsuario = new CreateUsuario(usuarioRepository, passwordEncrypter);

export default class AuthController {
  static async register(req, res) {
    try {
      const user = await createUsuario.execute(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
