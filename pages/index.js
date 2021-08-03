import Head from 'next/head'
import MainLayout from '../components/layouts/MainLayout'
import Hero1 from '../components/Hero/Hero1/Hero1'
import Hero2 from '../components/Hero/Hero2/Hero2'
import Collection1 from '../components/Collections/Collection1/Collection1'
import Collection2 from '../components/Collections/Collection2/Collection2'
import Collection3 from '../components/Collections/Collection3/Collection3'
import Footer from '../components/Footer/Footer'
export default function Home() {
  return (
      <MainLayout>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Hero2 />
        <Collection1 />
        <Collection2 />
        <Collection3 />
        <Footer />
      </MainLayout>
  )
}
