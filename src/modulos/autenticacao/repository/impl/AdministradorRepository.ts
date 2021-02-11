import { Inject, Service } from "typedi";

import IConexao from "../../../../core/config/IConexao";

import IAdministrador from "../../../common/entity/IAdministrador";
import Administador from "../../../common/entity/impl/Administrador";
import IAdministradorRepository from "../IAdministradorRepository";

@Service("autenticacao.administradorRepository")
export default class AdministradorRepository implements IAdministradorRepository {

  @Inject("conexao")
  private conexao: IConexao;

  public async pesquisar(usuario: string, senha: string): Promise<IAdministrador> {
    return await this.conexao.getGerenciador().findOne(Administador, {where: {Usuario: usuario, Senha: senha}});
  }

}