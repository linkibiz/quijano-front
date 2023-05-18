import Head from 'next/head'

const Layout = ({pageName, children}) => {
  const title = `${pageName} - Grupo Residencial`
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel='shortcut icon' href='/grupo-residencial-fav-icon.png'/>
      </Head>
      <main className="bg-[#BEBEBE] h-full min-h-screen flex justify-center">
        <div className="bg-gradient-pattern w-[425px] flex flex-col min-h-screen h-full">
          { children }
        </div>
      </main>
    </div>
  )
}

export default Layout