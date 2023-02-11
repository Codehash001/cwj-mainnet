import Head from 'next/head'
import Image from 'next/image'
import Base from '../components/base'
import Footer from '../components/footer';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Coffee With Jesus</title>
        <meta name="Description" content="Coffe with Jesus - minting website!" />
        <link rel="icon" href="/Logoicon.png" />
      </Head>
      <Base/>
      <Footer/>
    </div>
  )
}
