import { Head, usePage } from "@inertiajs/react";

import Calendar from "@/components/ui/calendar";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { takeDate } from "@/helpers/takeDate";

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

const AdminDashboard = () => {
    const { auth } = usePage<AuthProps>().props

    takeDate();

    return (
        <AppLayout breadcrumbs={breadcrumbs} backBtnClassName="hidden" isAdmin={true}>
            <Head title="Painel Adm" />
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

                <main className="mt-6 flex flex-col">
                    <div className="flex flex-col gap-4 pb-4">
                        <h2 className="text-2xl text-[var(--custom-orange)]">Agenda</h2>
                        <Calendar />
                    </div>
                </main>
            </section>
        </AppLayout>
    )
}

export default AdminDashboard;