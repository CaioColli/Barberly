import { usePage } from "@inertiajs/react"

import { Card } from "@/components/ui/serviceCard"
import AppLayout from "@/layouts/app-layout"

import { BreadcrumbItem } from "@/types"

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Barberly',
        href: '/admin/services',
    }
]

interface Service {
    id: number
    name: string
    path: string
    price: string
}

const Services = () => {
    const { services } = usePage().props as unknown as { services: Service[] }

    console.log(services)

    return (
        <AppLayout breadcrumbs={breadcrumbs} isAdmin={true}>
            <main className="px-6 lg:px-8">
                <h1 className="text-5xl text-primary">
                    Seus serviços
                </h1>

                <ul className="flex flex-col">
                    {services.map((service) => (
                        <Card
                            key={service.id}
                            image={service.path}
                            title={service.name}
                            price={service.price}
                        />
                    ))}
                </ul>
            </main>
        </AppLayout>
    )
}

export default Services