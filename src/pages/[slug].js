import { useRouter } from 'next/router'
import React from 'react'

const Perfil = ({data}) => {
  const router = useRouter()
  const {slug} = router.query
  console.log(data)

  return (
    <div>{slug}</div>
  )
}

export default Perfil

export async function getServerSideProps({query: {slug}}) {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/profiles?filters[Slug][$eq]=${slug}&populate=deep`;
  const req = await fetch(url);
  const res = await req.json();
  const data = res.data;
  console.log("data", res.data)
  return {
    props: {
      data,
    },
  };
}
