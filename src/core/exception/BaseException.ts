export class EBaseException extends Error {
    constructor(codigo: string, mensagem: string) {
        super(mensagem);
        this.Codigo = codigo;
    }

    public Codigo: string;
}