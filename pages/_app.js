import '../styles/globals.css'
import DefaultLayout from '../layout/default-layout'

function MyApp({ Component, pageProps }) {
  return (
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
      )
}

export default MyApp
