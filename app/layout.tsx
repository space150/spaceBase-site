import type { Metadata } from "next"
import type { ReactNode } from "react"
import Script from "next/script"
import { Footer } from "@/lib/Footer"
import { fontatica, myFontsCounterUrl, sourceSans } from "@/app/fonts"
import { siteDescription, siteTitle, siteUrl } from "@/lib/site"
import "@/styles/application.scss"

const gtmId: string = "GTM-WRKCNK"

const gtmInitScript: string = "window.dataLayer=window.dataLayer||[];window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});"

const shareImage: string = "/images/spacebase-facebook.jpg"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: ["space150"],
  openGraph: {
    siteName: "spaceBase",
    url: "/",
    title: siteTitle,
    description: siteDescription,
    images: shareImage,
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@space150",
    title: siteTitle,
    description: siteDescription,
    images: shareImage,
  },
}

interface Props {
  children: ReactNode
}

const RootLayout = (props: Props) => {
  return (
    <html lang="en" className={`${sourceSans.variable} ${fontatica.variable}`}>
      <body>
        <link rel="stylesheet" href={myFontsCounterUrl} precedence="default" />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            className="hidden"
          />
        </noscript>
        <Script id="gtm-init" dangerouslySetInnerHTML={{ __html: gtmInitScript }} />
        <Script id="gtm" src={`https://www.googletagmanager.com/gtm.js?id=${gtmId}`} />
        {props.children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout