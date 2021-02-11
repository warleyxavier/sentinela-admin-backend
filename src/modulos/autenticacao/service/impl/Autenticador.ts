import { Inject, Service } from "typedi";
import { uuid } from "uuidv4";
import * as md5 from "md5";

import IAdministrador from "../../../common/entity/IAdministrador";

import AccessToken from "../../dto/AccessToken";
import credenciaisAdministrador from "../../dto/CredenciaisAdministrador";
import IAdministradorRepository from "../../repository/IAdministradorRepository";
import EAdministradorNaoEncontradoException from "../../exception/EAdministradorNaoEncontradoException";
import IAutenticador from "../IAutenticador";
import IGeradorTokenJWT from "../IGeradorTokenJWT";

@Service("autenticacao.autenticador")
export default class Autenticador implements IAutenticador {
  
  @Inject("autenticacao.administradorRepository")
  private administradorRepository: IAdministradorRepository;

  @Inject("autenticacao.geradorTokenJWT")
  private geradorTokenJWT: IGeradorTokenJWT;

  public async Autenticar(credenciais: credenciaisAdministrador): Promise<AccessToken> {  
    const senhaDescriptografada: string = md5(credenciais.senha);

    const administrador: IAdministrador = await this.administradorRepository.pesquisar(credenciais.usuario, senhaDescriptografada);

    if (administrador === null || administrador === undefined)
    throw new EAdministradorNaoEncontradoException();
    

    return this.gerarAccessToken(administrador);
  }

  private gerarAccessToken(administrador: IAdministrador): AccessToken{
    const accessToken: string = this.geradorTokenJWT.gerar(administrador.Codigo);
    const refreshToken: string = uuid();

    return new AccessToken(accessToken, refreshToken);
  }

}