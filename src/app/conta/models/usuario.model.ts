export interface Usuario {
  id: string;
  nome: string;
  cpf: string;
  celular: number;
  email: string;
  dataNascimento: string;
  password: string;
  confirmPassword: string;
  aceiteTermo: boolean;
  aceiteNewsletter: boolean;
}
