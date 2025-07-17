import { FaTwitter, FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

export const Footer = () => {
    return (
        <footer className='w-full flex flex-col items-center py-[32px] gap-[16px] lg:flex-row lg:px-8 lg:justify-between'>
            <div className="text-[var(--custom-dark-gray)]">
                <h1 className='text-[32px] font-azonix'>Barberly</h1>
                <span className='text-lg'>
                    Desenvolvido por Caio Colli
                </span>
            </div>

            <nav className='flex flex-col gap-[16px] items-center lg:items-start text-primary'>
                <h2 className='text-xl'>Nossas redes sociais</h2>
                <ul className='flex gap-[16px]'>
                    <li> <FaTwitter /> </li>
                    <li> <FaFacebookSquare /> </li>
                    <li> <IoLogoInstagram /> </li>
                </ul>
            </nav>
        </footer>
    )
}