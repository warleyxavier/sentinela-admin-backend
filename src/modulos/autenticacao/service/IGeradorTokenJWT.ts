export default interface IGeradorTokenJWT{
  gerar(dados: any): string;
}