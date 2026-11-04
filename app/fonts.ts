import { Source_Sans_3 } from "next/font/google"
import localFont from "next/font/local"
import type { NextFontWithVariable } from "next/dist/compiled/@next/font"

/**
 * @license
 * MyFonts Webfont Build ID 2881398, 2014-09-11T09:39:05-0400
 *
 * The fonts listed in this notice are subject to the End User License
 * Agreement(s) entered into by the website owner. All other parties are
 * explicitly restricted from using the Licensed Webfonts(s).
 *
 * You may obtain a valid license at the URLs below.
 *
 * Webfont: Fontatica 4F Italic by 4th february
 * URL: http://www.myfonts.com/fonts/4thfebruary/fontatica-4f/italic/
 *
 * Webfont: Fontatica 4F by 4th february
 * URL: http://www.myfonts.com/fonts/4thfebruary/fontatica-4f/regular/
 *
 *
 * License: http://www.myfonts.com/viewlicense?type=web&buildid=2881398
 * Licensed pageviews: 20,000
 * Webfonts copyright: &#x00A9; 2012 by Sergiy S. Tkachenko / 4th february (info@4thfebruary.com.ua).&#x000D;&#x000A;All rights reserved. This font software is the property of Sergiy S. Tkachenko (Kremenchuk, Ukraine). You may not reproduce, modify, adapt, translate, alter nor
 *
 * © 2014 MyFonts Inc
 */

export const fontatica: NextFontWithVariable = localFont({
  src: [
    { path: "./fonts/fontatica-4f-regular.woff", weight: "400", style: "normal" },
    { path: "./fonts/fontatica-4f-italic.woff", weight: "400", style: "italic" },
  ],
  variable: "--font-head",
  display: "swap",
})

export const sourceSans: NextFontWithVariable = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

export const myFontsCounterUrl: string = "https://hello.myfonts.net/count/2bf776"