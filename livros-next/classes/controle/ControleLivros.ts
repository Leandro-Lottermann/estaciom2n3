import { Livro } from "../modelo/Livro";


let livros: Array<Livro> = [
  {titulo: "Teoria da Música", codEditora: 6341, codico: 1, resumo: "Conceitos fundamentais da teoria da música", autores: ["Bardin", "Beethoven"]},

  {titulo: "O homem mais rico da Babilônia", codEditora: 4141, codico: 2, resumo: "Com mais de dois milhões de exemplares vendidos no mundo todo, O homem mais rico da Babilônia é um clássico sobre como multiplicar riqueza e solucionar problemas financeiros.", autores: [" George S Clason"]},

  {titulo: "A psicologia financeira", codEditora: 1262, codico: 3, resumo: "Lições atemporais sobre fortuna, ganância e felicidade.", autores: ["Morgan Housel", "Roberta Clapp", "Bruno Fiuza"]}
]

const obterLivros = (): Array<Livro> => {
  return livros
}

const incluirLivro = (livro: Livro): void => {
  livro.codico = livros[livros.length - 1].codico + 1;
  livros.push(livro);
}

const excluirLivro = (codico: number): void => {
  livros.splice(livros.findIndex(ele => ele.codico === codico), 1)
  
}

export const ControleLivros = {
  obterLivros,
  incluirLivro,
  excluirLivro
}