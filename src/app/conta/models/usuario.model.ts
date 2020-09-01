export interface Usuario {
  id: string;
  nome: string;
  cpf: string;
  celular: number;
  email: string;
  dataNascimento: string;
  senha: string;
  confirmaSenha: string;
  aceiteTermo: boolean;
  aceiteNewsletter: boolean;
}
