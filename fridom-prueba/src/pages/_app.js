import { CommentProvider } from '../context/commentsContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return( 
  <CommentProvider>
    <Component {...pageProps} />
  </CommentProvider>
  )
}

export default MyApp
