import AccessToken from "../dto/AccessToken";
import CredenciaisAdministrador from "../dto/CredenciaisAdministrador";

export default interface Autenticador{

  Autenticar(credenciais: CredenciaisAdministrador): Promise<AccessToken>;

}