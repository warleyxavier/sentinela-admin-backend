import { Body, Get, JsonController } from "routing-controllers";
import Container from "typedi";

import { EBaseException } from "../core/exception/BaseException";
import IAutenticador from "../modulos/autenticacao/service/IAutenticador";

import CredenciaisAdministrador from "../modulos/autenticacao/dto/CredenciaisAdministrador";

@JsonController("/autenticacao")
export default class AutenticacaoController {

  private autenticador: IAutenticador;

  constructor() {
    this.autenticador = Container.get<IAutenticador>("autenticacao.autenticador");
  }

  @Get("/access-token")
  public autenticar(@Body() credenciais: CredenciaisAdministrador) {

    if (!credenciais.usuario)
      throw new EBaseException("400", "Usuário não informado");

    if (!credenciais.senha)
      throw new EBaseException("400", "Senha não informada");   

    return this.autenticador.Autenticar(credenciais);
  }

}