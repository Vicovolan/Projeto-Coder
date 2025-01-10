import Convidado from "../model/Convidado";
import validarConvidado from "./validarConvidado";

export default function processarConvidado(convidado: Partial<Convidado>): Convidado {

const erros = validarConvidado(convidado);

  if (erros.length) {
    throw new Error(erros.join("\n"));
  }
  const temAcompanhante = convidado.possuiAcompanhante && convidado.confirmado && (convidado.qtdeAcompanhantes ?? 0) > 0;

    const convidadoAtualizado ={
        ...convidado,
        qtdeAcompanhantes: temAcompanhante ? convidado.qtdeAcompanhantes : 0,
        possuiAcompanhantes: temAcompanhante,
    }

    return convidadoAtualizado as Convidado;
}