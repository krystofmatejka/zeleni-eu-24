import { Html, Head, Main, NextScript } from 'next/document'

/*import { Lato } from 'next/font/google'

const inter = Lato({
  weight: ['300', '700'],
  subsets: ['latin-ext'],
  variable: '--font-lato',
  display: 'swap',
})*/

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}