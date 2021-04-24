import '../styles/globals.css'
import Image from 'next/image'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Component {...pageProps} />
      <Link href="/movies">
        <a className="movie-icon">
        <Image
          src="/icons/movie.png"
          width={35}
          height={35}
        />
        </a>
      </Link>
      <Link href="/">
        <a className="back-icon">
        <Image
          src="/icons/back.png"
          width={45}
          height={45}
        />
        </a>
      </Link>
    </>
  )
}

export default MyApp