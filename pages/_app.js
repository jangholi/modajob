import '../styles/globals.css'
import DefaultLayout from '../layout/default-layout'
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
  return (
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
      )
}

export default MyApp
