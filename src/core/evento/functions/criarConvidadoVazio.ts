import Convidado from "../model/Convidado";
import { Id } from '@/src/core/shared';

export default function criarConvidadoVazio(): Partial<Convidado> {
  return {
    id: Id.novo(),
    nome: "",
    email: "",
    confirmado: true,
    possuiAcompanhante: false,
    qtdeAcompanhantes: 0,
  };
}