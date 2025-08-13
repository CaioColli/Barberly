import { Head, Link, router } from "@inertiajs/react";

import AppLayout from "@/layouts/app-layout";

import { BreadcrumbItem } from "@/types";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/ui/footer";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Barberly',
        href: '/admin/openingHours',
    }
]
const OpeningHours = () => {

    const fullWidth = 'w-full'

    return (
        <AppLayout breadcrumbs={breadcrumbs} isAdmin={true} backPage={() => router.get(route('adminDashboard'))}>
            <Head title="horários de funcionamento" />
            <section className="px-6 lg:px-8 h-full">
                <header className="flex flex-col gap-6">
                    <h1 className='text-5xl'>
                        horários de funcionamento
                    </h1>

                    <div className="flex flex-col gap-0">
                        <span className="text-2xl text-[var(--custom-orange)]">
                            Seg - Sab
                        </span>
                        <span className="text-2xl">
                            08:00 - 17:30
                        </span>
                    </div>
                </header>

                <ul className="flex flex-col gap-2 mt-6">
                    <li>
                        <Link href="/admin/dashboard">
                            <Button className={fullWidth}>
                                Editar dias funcionamento
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/dashboard">
                            <Button className={fullWidth}>
                                Editar horários funcionamento
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/dashboard">
                            <Button className={fullWidth}>
                                programar fechamento
                            </Button>
                        </Link>
                    </li>
                </ul>
            </section>

            <Footer />
        </AppLayout>
    )
}

export default OpeningHours;