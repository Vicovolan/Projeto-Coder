import Convidado from "../model/Convidado";
import Evento from "../model/Evento";

export default function validarConvidado(convidado: Partial<Convidado>): string[]{
    const erros: string[] = [];
    if(!convidado.nome){
        erros.push("Nome é obrigatório");
    }
    if(!convidado.email){
        erros.push("Email é obrigatório");
    }

    return erros;
}