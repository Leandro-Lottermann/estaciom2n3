export class Livro {
    codEditora: number;
    codico: number;
    titulo: string;
    resumo: string;
    autores: string[]
    constructor (codEditora: number, codico: number, titulo: string, resumo: string, autores: string[]) {
        this.codEditora = codEditora;
        this.codico = codico
        this.titulo = titulo;
        this.resumo = resumo;
        this.autores = autores;
    }
}
