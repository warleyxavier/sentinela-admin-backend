import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CriacaoTabelaUsuarios1612401713198 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: "USUARIOS_ADMINISTRADORES",
            columns: [
                {
                    name: "ID",
                    type: "INTEGER",
                    isNullable: false,
                    isPrimary: true,
                },
                {
                    name: "EMAIL",
                    type: "VARCHAR(50)",
                    isNullable: false,
                },
                {
                    name: "USUARIO",
                    type: "VARCHAR(20)",
                    isNullable: false,
                    isUnique: true
                },
                {
                    name: "SENHA",
                    type: "VARCHAR(70)",
                    isNullable: false
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("USUARIOS_ADMINISTRADORES");
    }

}
