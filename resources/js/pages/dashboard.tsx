import { takeDate } from '@/helpers/takeDate';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';

import { useState } from 'react';

import { Head, usePage } from '@inertiajs/react';
import clsx from 'clsx';
import Calendar from '@/components/ui/calendar';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Barberly',
        href: '/dashboard',
    },
];

interface AuthProps {
    auth: {
        user: {
            name: string;
        };
    };
    [Key: string]: object;
}

export default function Dashboard() {
    const [selectedGuide, setSelectedGuide] = useState('agenda');

    const handleGuideClick = (guide: string) => {
        setSelectedGuide(guide);
    };

    const { auth } = usePage<AuthProps>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs} backBtnClassName='hidden'>
            <Head title="Página inicial" />

            <section className='px-6 lg:px-8'>
                <header className="flex flex-col gap-2 text-primary pb-6">
                    <h1 className="text-5xl break-words">Olá, {auth.user.name} ✌️</h1>
                    <span className="text-[20px]">{takeDate()}</span>

                    <ul className='flex w-full gap-4 justify-between pt-4'>
                        <li className={clsx(selectedGuide === 'agenda'
                            ? 'bg-[var(--custom-black)] rounded-[8px] w-full text-center text-[var(--custom-middle-white)] text-[18px] pt-2 pb-2 cursor-pointer'
                            : 'border-2 border-[var(--custom-dark-gray)] rounded-[8px] w-full text-center text-[var(--custom-dark-gray)] text-[18px] pt-2 pb-2 cursor-pointer')}
                            onClick={() => handleGuideClick('agenda')}
                        >
                            Agenda
                        </li>

                        <li className={clsx(selectedGuide === 'reviews'
                            ? 'bg-[var(--custom-black)] rounded-[8px] w-full text-center text-[var(--custom-middle-white)] text-[18px] pt-2 pb-2 cursor-pointer'
                            : 'border-2 border-[var(--custom-dark-gray)] rounded-[8px] w-full text-center text-[var(--custom-dark-gray)] text-[18px] pt-2 pb-2 cursor-pointer')}
                            onClick={() => handleGuideClick('reviews')}
                        >
                            Reviews
                        </li>

                        <li className={clsx(selectedGuide === 'location'
                            ? 'bg-[var(--custom-black)] rounded-[8px] w-full text-center text-[var(--custom-middle-white)] text-[18px] pt-2 pb-2 cursor-pointer'
                            : 'border-2 border-[var(--custom-dark-gray)] rounded-[8px] w-full text-center text-[var(--custom-dark-gray)] text-[18px] pt-2 pb-2 cursor-pointer')}
                            onClick={() => handleGuideClick('location')}
                        >
                            Localização
                        </li>
                    </ul>
                </header>

                {selectedGuide === 'agenda' && (
                    <form className='flex flex-col gap-4'>
                        <div>
                            <Calendar />
                            <div className='flex gap-4'>
                                <div className='flex gap-2 items-center'>
                                    <span className='block w-2 h-2 bg-[var(--custom-orange)] rounded-4xl'></span>
                                    <span className='text-[14px]'>Poucos horários disponíveis</span>
                                </div>

                                <div className='flex gap-2 items-center'>
                                    <span className='block w-2 h-2 bg-[var(--custom-red)] rounded-4xl'></span>
                                    <span className='text-[14px]'>Sem horários disponíveis</span>
                                </div>
                            </div>
                        </div>
                        <h2 className='text-[20px]'>Horários disponíveis</h2>
                    </form>

                )}
            </section>

        </AppLayout>
    );
}
