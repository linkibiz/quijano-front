import Head from 'next/head'

const Layout = ({pageName, children}) => {
  const title = `${pageName} - AALN`
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel='shortcut icon' href='/aaln-favicon.png'/>
      </Head>
      <main className="bg-white h-full min-h-screen flex justify-center">
        <div className="w-[425px] flex flex-col min-h-screen h-full">
          { children }
        </div>
      </main>
    </div>
  )
}

export default Layout