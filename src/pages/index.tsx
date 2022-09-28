import Layout from "../components/Layout"

export default function Home() {
  return (
    <div className={`flex h-screen justify-center items-center bg-gradient-to-r
      from-blue-600 to-purple-500`}>
        
     <Layout titulo="Cadastro Simples">
       <span>Conteúdo</span>
     </Layout>
    </div>
  )
}

