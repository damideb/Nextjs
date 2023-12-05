import React from 'react'
import {FaTwitter, FaGithub, FaLinkedin} from "react-icons/fa"
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="flex flex-row justify-center m-6 sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
    <Link className="text-white/90 hover:text-white" href="https://www.linkedin.com/in/damilola-adebowale-0585bb193/" target='_blank'>
        <FaLinkedin />
    </Link>
    <Link className="text-white/90 hover:text-white" href="https://github.com/damideb" target='_blank'>
        <FaGithub />
    </Link>
    <Link className="text-white/90 hover:text-white" href="https://twitter.com/Dami_debby" target='_blank'>
        <FaTwitter />
    </Link>
</div>

  )
}
