import Image from "next/image"
import helmet from "@/public/images/helmet.png"

/**
 * Site-wide footer with the space150 copyright, ending at the year the site was built.
 */
export const Footer = () => {
  return (
    <section className="footer">
      <Image src={helmet} alt="spaceman" />
      <p>
        &copy;{new Date().getFullYear()}{" "}
        <a href="https://www.space150.com" target="_blank" rel="noopener noreferrer">
          space150
        </a>
      </p>
    </section>
  )
}