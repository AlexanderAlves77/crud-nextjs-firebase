import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"

export default function Home() {
  const clientes = [
    new Cliente('Sara', 8, '1'),
    new Cliente('Kelvin', 21, '2'),
    new Cliente('Joaquim', 3, '3'),
    new Cliente('Patrick', 19, '4'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(`Selecionado...${cliente.nome}`)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir...${cliente.nome}`)
  }

  return (
    <div className={`flex h-screen justify-center items-center bg-gradient-to-r
      from-blue-600 to-purple-500`}>

     <Layout titulo="Cadastro Simples">
       <Tabela clientes={clientes} 
        clienteSelecionado={clienteSelecionado}
        clienteExcluido={clienteExcluido}
      />
     </Layout>
    </div>
  )
}

