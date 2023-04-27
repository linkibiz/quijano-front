import Head from 'next/head'

const Layout = ({pageName, children}) => {
  const title = `${pageName} - QUIJANO & ASSOCIATES`
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="bg-[#BEBEBE] h-full min-h-screen flex justify-center">
        <div className="bg-white w-[425px] flex flex-col min-h-screen h-full">
          {children}    
        </div>
      </main>
    </div>
  )
}

export default Layout