import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import type { SocialType } from "../types/dataTypes"

const Footer = ({ socialHub }: { socialHub: SocialType }) => {
    return (

        <footer className="flex flex-col bg-zinc-800 pb-12 items-center justify-center pt-10 border-t border-gray-700 footer-bottom">

            <p>© 2025 Rayhan Febriyan Saputra. All rights reserved.</p>

            {/* Ikon Sosial Media */}
            <div className="flex space-x-4 text-white text-lg mt-2">
                <a href={socialHub.github} className="opacity-70 hover:opacity-100 transition duration-300">
                    <FaGithub />
                </a>
                <a href={socialHub.instagram} className="opacity-70 hover:opacity-100 transition duration-300">
                    <FaInstagram />
                </a>
                <a href={socialHub.linkedin} className="opacity-70 hover:opacity-100 transition duration-300">
                    <FaLinkedin />
                </a>
            </div>
        </footer>
    )
}

export default Footer