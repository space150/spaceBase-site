import Image from "next/image"
import Link from "next/link"
import browser from "@/public/images/browser.png"
import hero from "@/public/images/hero.png"
import lego from "@/public/images/lego.png"
import light from "@/public/images/light.png"
import mobile from "@/public/images/mobile.png"
import sass from "@/public/images/sass.png"
import ship from "@/public/images/ship.png"
import { spacebaseDownloadUrl, spacebaseRepoUrl, spacebaseVersion } from "@/lib/site"

/**
 * The spaceBase landing page.
 */
const HomePage = () => {
  return (
    <main>
      <section className="hero">
        <div className="site-wrapper">
          <div className="figure">
            <Image src={hero} alt="spaceman" preload />
          </div>
        </div>
        <div className="content-over-image">
          <h1 className="logo">spaceBase</h1>
          <p>v {spacebaseVersion}</p>
          <p>
            <a className="btn" href={spacebaseDownloadUrl}>Download</a>
          </p>
          <p className="github">
            <a href={spacebaseRepoUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
        </div>
      </section>
      <section className="intro padding">
        <div className="container narrow">
          <h2 className="h3">spaceBase is a Sass-based responsive CSS framework.</h2>
          <p>Many CSS frameworks are meant to be included and left alone. But spaceBase is a boilerplate layer that can be built upon and tailored for your needs. It combines best practices for today&apos;s responsive web with the core components we use on every project. Consider it the launch pad for your adventures <span className="no-wrap">into cyberspace.</span></p>
        </div>
      </section>
      <section className="what">
        <div className="container">
          <div className="grid-wrapper grid-wrapper--full">
            <div className="grid lap-one-half">
              <div className="left padding">
                <h2 className="h2">What is it?</h2>
                <p>spaceBase is the front-end starter files for any new web project. It sets up your Sass architecture and normalizes your CSS and native HTML elements. It provides the structural groundwork for <span className="no-wrap">your application.</span></p>
              </div>
            </div>
            <div className="grid lap-one-half">
              <div className="right padding figure-on-top neg-margin">
                <Image src={browser} alt="code" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="key padding">
        <div className="container">
          <h2 className="h2">Key Features</h2>
          <ul className="grid-wrapper">
            <li className="grid hand-one-half lap-one-quarter">
              <Image src={mobile} alt="mobile phone" />
              <span className="h3">Mobile-first Flexbox Grid</span>
            </li>
            <li className="grid hand-one-half lap-one-quarter">
              <Image src={sass} alt="sass" />
              <span className="h3">Sass-based</span>
            </li>
            <li className="grid hand-one-half lap-one-quarter">
              <Image src={lego} alt="building block" />
              <span className="h3">Object-oriented CSS</span>
            </li>
            <li className="grid hand-one-half lap-one-quarter">
              <Image src={light} alt="flashlight" />
              <span className="h3">Optimized for Light Speed</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="features padding">
        <div className="container narrow">
          <h3 className="h3">More Features</h3>
          <ul className="v-list">
            <li>Common UI components</li>
            <li>Helper classes and mixins</li>
            <li>Cross-browser form controls</li>
            <li>Supports all modern browsers</li>
          </ul>
        </div>
      </section>
      <section className="launch">
        <div className="container">
          <div className="grid-wrapper grid-wrapper--full">
            <div className="grid lap-one-half">
              <div className="left figure-on-top neg-margin">
                <h2 className="h2">Launch Sequence</h2>
                <Image src={ship} alt="spaceship" />
              </div>
            </div>
            <div className="grid lap-one-half">
              <div className="right padding">
                <ol className="numbers">
                  <li><pre>$ npm install spacebase</pre> or <a href={spacebaseDownloadUrl}>download the ZIP</a> and copy its contents into your project folder.</li>
                  <li>Use your favorite Sass compiler to watch changes and compile the files.</li>
                  <li>Open scss/_vars.scss to update your global variables.</li>
                  <li>Start building out your project. We&apos;ve included index.html and <Link href="/styleguide">styleguide.html</Link> to begin with.</li>
                  <li>scss/base/ is the core of spaceBase. Build your UI layer in scss/ui/</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="customize padding">
        <div className="container narrow">
          <h2 className="h2">Customize</h2>
          <ul className="v-list">
            <li>Can be used within Next.js projects</li>
            <li>Compatible with any Dart Sass compiler</li>
            <li>Scalable, mobile-first grid - choose how robust you want it</li>
            <li>Global variables for breakpoints, colors, fonts and more</li>
          </ul>
        </div>
      </section>
      <section className="credits">
        <div className="site-wrapper">
          <div className="grid-wrapper grid-wrapper--full">
            <div className="grid lap-one-half">
              <div className="figure-on-top">
                <div className="padding">
                  <h2 className="h2">Mission Control</h2>
                  <p><a href="https://www.space150.com" target="_blank" rel="noopener noreferrer">space150</a></p>
                </div>
              </div>
            </div>
            <div className="grid lap-one-half">
              <div className="padding">
                <h2 className="h2">Credits</h2>
                <ul className="v-list">
                  <li><a href="https://github.com/csswizardry/inuit.css" target="_blank" rel="noopener noreferrer">Harry Roberts&apos; inuit.css</a></li>
                  <li><a href="https://github.com/sass-mq/sass-mq" target="_blank" rel="noopener noreferrer">Sass MQ</a></li>
                  <li><a href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer">Bootstrap</a></li>
                  <li><a href="https://necolas.github.io/normalize.css/" target="_blank" rel="noopener noreferrer">Normalize.css</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="download">
        <p>
          <a className="btn" href={spacebaseDownloadUrl}>Download spaceBase</a>
        </p>
      </section>
      <section className="contribute">
        <div className="container">
          <p>All are welcome to contribute.</p>
          <ul className="h-list h-list--centered">
            <li><iframe src="https://ghbtns.com/github-btn.html?user=space150&repo=spaceBase&type=star&count=true" frameBorder="0" scrolling="no" width="96" height="20" title="Star spaceBase on GitHub" /></li>{" "}
            <li><iframe src="https://ghbtns.com/github-btn.html?user=space150&repo=spaceBase&type=watch&count=true&v=2" frameBorder="0" scrolling="no" width="100" height="20" title="Watch spaceBase on GitHub" /></li>{" "}
            <li><iframe src="https://ghbtns.com/github-btn.html?user=space150&repo=spaceBase&type=fork&count=true" frameBorder="0" scrolling="no" width="90" height="20" title="Fork spaceBase on GitHub" /></li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default HomePage