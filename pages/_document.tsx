import { Html, Head, Main, NextScript } from 'next/document'

const pixel = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1266828746724870');
fbq('track', 'PageView');
`

const pixelNoScript = `<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1266828746724870&ev=PageView&noscript=1"
/>`

const gTag = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-MG2QVEY7PC');
`
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{__html: pixel }}/>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MG2QVEY7PC"/>
        <script dangerouslySetInnerHTML={{__html: gTag}}/>
      </Head>
      <body>
        <Main />
        <NextScript />
        <noscript dangerouslySetInnerHTML={{__html: pixelNoScript}}/>
      </body>
    </Html>
  )
}