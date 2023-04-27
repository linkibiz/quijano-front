import Banner from '@/components/Banner'
import ContactButtons from '@/components/ContactButtons'
import Layout from '@/components/Layout'
import Profile from '@/components/Profile'
import Vcard from '@/components/Vcard'
import Wrapper from '@/components/Wrapper'
import { useRouter } from 'next/router'
import React from 'react'

const Perfil = ({data}) => {
  const router = useRouter()
  const {slug} = router.query
  const pageTitle = slug.split('-').join(' ').toUpperCase()
  return (
    <Layout pageName={pageTitle}>
      <Banner/>
      <Wrapper>
        <Profile profileData={data} />
        <Vcard vcardData={data} />
        <ContactButtons contactData={data}/>
      </Wrapper>
    </Layout>
  )
}

export default Perfil

export async function getServerSideProps({query: {slug}}) {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/profiles?filters[Slug][$eq]=${slug}&populate=deep`;
  const req = await fetch(url);
  const res = await req.json();
  const data = res.data[0];
  return {
    props: {
      data,
    },
  };
}
