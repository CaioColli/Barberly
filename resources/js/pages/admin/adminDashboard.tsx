import Calendar from "@/components/ui/calendar";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Barberly',
        href: '',
    }
]

const AdminDashboard = () => {
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
                <header>
                    <h1 className="text-5xl">Painel administrativo</h1>
                    <span className="text-[20px]">{formattedDate}</span>
                </header>

                <main className="mt-6">
                    <h2 className="text-2xl text-[var(--custom-orange)]">Agenda</h2>

                    <Calendar />
                </main>
            </section>
        </AppLayout>
    )
}

export default AdminDashboard;