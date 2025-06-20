import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

import { FaTwitter, FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <section className='bg-[var(--custom-black-bg)] min-h-screen h-full flex flex-col justify-between pt-[48px] px-[24px] lg:px-[32px]'>
            <Head title="Barberly">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <span className='border-s-[5px] border-[#C99300] pl-[24px] text-5xl max-w-[200px] hidden lg:block lg:max-w-[350px]'>
                Crie um estilo único
            </span>

            <main className='w-full flex justify-center items-center flex-col gap-[48px]'>
                <figure className='flex flex-col items-center gap-[24px]'>
                    <figcaption className='max-w-[80px] hidden lg:block'>Barbeiro Pedro Pascal</figcaption>

                    <img src="assets/barber_guy.png" alt="Foto do barbeiro" className='w-[250px]'/>
                </figure>

                {auth.user ? (
                    <Link
                        href={route('dashboard')}
                        className="text-[var(--custom-black)] text-xl bg-[var(--custom-white)] rounded-lg w-full text-center py-[8px]"
                    >
                        Voltar ao ínicio
                    </Link>
                ) : (
                    <div className='max-w-[350px] flex flex-col gap-[24px]'>
                        <h1 className='text-2xl font-azonix text-center'>
                            Sua experiência começa aqui!
                        </h1>

                        <Link
                            href={route('login')}
                            className="text-[var(--custom-black)] text-xl bg-[var(--custom-white)] rounded-lg w-full text-center py-[8px]"
                        >
                            Clique aqui
                        </Link>
                    </div>
                )}
            </main>

            <footer className='w-full flex flex-col items-center py-[32px] gap-[16px] lg:flex-row lg:justify-between'>
                <div>
                    <h1 className='text-[32px] font-azonix'>Barberly</h1>
                    <span className='text-lg text-[var(--custom-dark-gray)]'>
                        Desenvolvido por Caio Colli
                    </span>
                </div>

                <div>
                    <nav className='flex flex-col gap-[16px] items-center lg:items-start'>
                        <h2 className='text-[var(--custom-middle-white)] text-xl'>Nossas redes sociais</h2>
                        <ul className='flex gap-[16px]'>
                            <li> <FaTwitter /> </li>
                            <li> <FaFacebookSquare /> </li>
                            <li> <IoLogoInstagram /> </li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </section>
    );
}
