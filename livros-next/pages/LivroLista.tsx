import { useEffect, useState } from "react"
import { Livro } from "../classes/modelo/Livro"
import LinhaLivro from "../componentes/LinhaLivro"
import Head from "next/head"
import { ControleEditora } from "../classes/controle/ControleEditora"
import Menu from "../componentes/Menu"

const baseUrl = "http://localhost:3000/api/livros"

const controleEditoras = ControleEditora;

const obter = async () => {
    const resultado = await (await fetch(baseUrl)).json()
    return resultado
}

const excluirLivro = async (codico: number) => {
    const resultado = await (await fetch(`${baseUrl}/${codico}`, { method: "DELETE"})).json()
    return resultado
}


export default function LivroLista() {
    const [livros, setLivros] = useState<Livro[]>();
    const [carregado, setCarregado] = useState<boolean>(false);
  
    useEffect(() => {
        const res2 = obter().then((res) => {
            setLivros(res)
            setCarregado(true)
        }

        )
        
        ;
        
    }, [carregado]);
  
    const excluir = (codicoLivro: number) => {
      excluirLivro(codicoLivro).then((res) => {
        console.log(res)
        setCarregado(false);

      })
    
    };
  
    return (
      <>
        <Head>
            <title>Tabela de Livros</title>
        </Head>
        <Menu />
        <main>
            <h1 className="h1">Catálogo de Livros</h1>
            <table className="table table-light">
                <thead className="table-dark">
                    <tr>
                    <th className="col-2">Titulo</th>
                    <th className="col-6">Resumo</th>
                    <th className="col-2">Editora</th>
                    <th className="col-2">Autores</th>
                    </tr>
                </thead>
                <tbody>
                    {livros?.map((livro) => (
                    <LinhaLivro
                        livro={livro}
                        nomeEditora={controleEditoras.getNomeEditora(livro.codEditora)}
                        excluir={excluir}
                        key={livro?.codico}
                    />
                    ))}
                </tbody>
            </table>

        </main>
      </>
    );
  }