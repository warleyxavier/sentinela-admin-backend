import IAdministrador from "../../common/entity/IAdministrador";

export default interface IAdministradorRepository {

  pesquisar(usuario: string, senha: string): Promise<IAdministrador>;

}