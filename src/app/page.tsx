
import Pagina from "@/src/components/template/Pagina";
import { Evento } from "@/src/core";

export default function Home() {
  const e: Partial<Evento> = {};
  return (
    <Pagina>
    <div>Inicio</div>
    </Pagina>
  );
}
