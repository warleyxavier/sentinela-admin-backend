import { EBaseException } from "../../../core/exception/BaseException";

export default class EAdministradorNaoEncontradoException extends EBaseException {

  constructor() {
    const CODIGO = '401';
    const MENSAGEM = 'Administrador não encontrado com este usuário e senha';

    super(CODIGO, MENSAGEM);
  }

}