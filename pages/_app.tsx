import '@/styles/globals.scss'
import type { AppProps } from 'next/app'


import localFont from 'next/font/local'

const myFont = localFont({ src: '../fonts/proximanova_regular.ttf' })

export default function App({ Component, pageProps }: AppProps) {
  return <div style={myFont.style} >
    <Component {...pageProps} />
  </div> 
}
