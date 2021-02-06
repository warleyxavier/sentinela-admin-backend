import { PrimaryColumn, Column, Entity } from "typeorm"

import IAdministrador from "../IAdministrador";

@Entity("USUARIOS_ADMINISTRADORES")
export default class Administador implements IAdministrador {

  @PrimaryColumn({name: "ID"})
  Codigo: number;

  @Column({name: "EMAIL"})
  Email: string;

  @Column({name: "USUARIO"})
  Usuario: string;

  @Column({name: "SENHA"})
  Senha: string;

}