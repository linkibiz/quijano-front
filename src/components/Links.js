import React from 'react'

const Links = ({linksList}) => {
  console.log(linksList)
  return (
    <ul className='flex flex-col gap-3 w-full items-center'>
      {linksList.map((link) => (
        <li className='p-3 font-bold w-4/5 text-center bg-[#044e7d] rounded-md text-white' key={link.id}>
          <a src={link.url} target='_blank'>
            {link.titulo}
          </a>
        </li>
      ))}  
    </ul>
  )
}

export default Links