import '../styles/globals.css'
import Navbar from '../components/navbar'
import "../components/navbar.css"

function MyApp({ Component, pageProps }) {
  return <>
    <Navbar></Navbar>
    <Component {...pageProps} />
  </>
}

export default MyApp
