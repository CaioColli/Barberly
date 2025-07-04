import { Head, Link, usePage } from "@inertiajs/react";

import Calendar from "@/components/ui/calendar";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { takeDate } from "@/helpers/takeDate";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/ui/footer";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Barberly',
        href: '/admin/dashboard',
    }
]

interface AuthProps {
    auth: {
        user: {
            name: string
        }
    }
    [key: string]: object;
}

interface UserTypeProps {
    userType: {
        user_type: string
    }
    [key: string]: object;
}

const AdminDashboard = () => {
    const { auth, userType } = usePage<AuthProps & UserTypeProps>().props

    takeDate();

    const fullWidth = 'w-full'

    return (
        <AppLayout breadcrumbs={breadcrumbs} backBtnClassName="hidden" isAdmin={true}>
            <Head title="Painel Administrativo" />
            <section className="px-6 lg:px-8">
                <header className="flex flex-col gap-2 text-primary">
                    <h1 className="text-5xl">Painel administrativo</h1>
                    <h2 className="flex gap-1 text-2xl">Olá
                        <span className="text-[var(--custom-orange)]">
                            {auth.user.name}
                        </span>
                    </h2>
                    <span className="text-[20px]">{takeDate()}</span>
                </header>

                <main className="mt-6 flex flex-col gap-6">
                    <div className="flex flex-col gap-4 pb-4">
                        <h2 className="text-2xl text-[var(--custom-orange)]">Agenda</h2>
                        <Calendar />
                        <h2 className='text-[20px]'>Horários agendados</h2>
                    </div>

                    {userType.user_type === 'master' && (
                        <ul className="flex flex-col gap-2">
                            <li>
                                <Link href="/admin/addService">
                                    <Button className={fullWidth}>
                                        Adicionar serviços
                                    </Button>
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard">
                                    <Button className={fullWidth}>
                                        Editar serviços
                                    </Button>
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard">
                                    <Button className={fullWidth}>
                                        Editar horários de serviço
                                    </Button>
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard">
                                    <Button className={fullWidth}>
                                        Editar / Adicionar colaborador
                                    </Button>
                                </Link>
                            </li>
                        </ul>
                    )}
                </main>
            </section>

            <Footer />
        </AppLayout>
    )
}

export default AdminDashboard;