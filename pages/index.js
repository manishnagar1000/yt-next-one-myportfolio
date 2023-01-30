import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import HomePage from '@/components/HomePage'
import Me from '@/components/Me'
import PortFolio from '@/components/PortFolio'
import Head from 'next/head'
// import vedio from '../public/assests/vedio.mp4'

export default function Home() {
  return (
    <>
      <Head>
        <title>Manish Nagar</title>
        <meta name="description" content="My Resume" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
     
<HomePage/>
<PortFolio/>
<Experience/>
<Me/>
<Contact/>

    </>
  )
}
