import Convidado from './Convidado';

export default interface Evento{
    id: string;
    alias: string; //é algo que vai seguir uma regra, por exemplo vai ser nome-sobrenome, apelido
    senha: string;
    nome: string;
    data: Date;
    local: string;
    descricao: string;
    imagem: string;
    imagemBackground: string;
    publicoEsperado: number;
    convidados: Convidado[];
}