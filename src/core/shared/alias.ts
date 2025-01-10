export default class Alias{
    static formatar(valor: string): string{
        return valor.replace(/ /g, "-").toLowerCase(); //pega tudo que é espaço em branco e substitui por hifen
    }
}