import { sign } from "jsonwebtoken";
import { Service } from "typedi";

import IGeradorTokenJWT from "../IGeradorTokenJWT";

@Service("autenticacao.geradorTokenJWT")
export default class GeradorTokenJWT implements IGeradorTokenJWT {

  public gerar(dados: any): string {
    return sign({data: dados}, process.env.JWT_SECRET_KEY, {expiresIn: `${process.env.JWT_EXPIRATION_TIME}h`})
  }

}