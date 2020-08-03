import { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import '../styles/globals.scss'
import { store } from '../store';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
