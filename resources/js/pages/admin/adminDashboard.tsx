import { usePage } from "@inertiajs/react";

import Calendar from "@/components/ui/calendar";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Barberly',
        href: '',
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

const AdminDashboard = () => {
    const { auth } = usePage<AuthProps>().props

    console.log(auth)

    const date = new Date();
    const formattedDate = date.toLocaleDateString('pt-BR', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })

    return (
        <AppLayout breadcrumbs={breadcrumbs} backBtnClassName="hidden" isAdmin={true}>
            <section className="px-6">
                <header className="flex flex-col gap-2 text-primary">
                    <h1 className="text-5xl">Painel administrativo</h1>
                    <h2 className="flex gap-1 text-2xl">Olá
                        <span className="text-[var(--custom-orange)]">
                            {auth.user.name}
                        </span>
                    </h2>
                    <span className="text-[20px]">{formattedDate}</span>
                </header>

                <main className="mt-6 flex flex-col">
                    <h2 className="text-2xl text-[var(--custom-orange)]">Agenda</h2>

                    <Calendar />
                </main>
            </section>
        </AppLayout>
    )
}

export default AdminDashboard;