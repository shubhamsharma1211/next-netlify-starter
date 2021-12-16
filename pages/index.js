import Link from 'next/link';
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <h1 className={styles.title}>Welcome to our demo blog!</h1>

<p>
  You can find more articles on the{' '}
  <Link href='/blog'>
  <a>blog articles page</a>
  </Link>
</p>
      </main>

      <Footer />
    </div>
  )
}
