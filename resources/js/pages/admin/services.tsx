import { router, usePage } from "@inertiajs/react"

import AppLayout from "@/layouts/app-layout"

import { BoxContent } from "@/components/service-box-content"

import { BreadcrumbItem } from "@/types"

import { CgArrowsExchange } from "react-icons/cg";
import { Footer } from "@/components/ui/footer";

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

    const handleClickService = (item: number) => {
        router.get(`/admin/service/${item}`);
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs} isAdmin={true} backPage={() => router.get(route('adminDashboard'))}>
            <main className="flex flex-col gap-6 px-6 lg:px-8 h-full relative">
                <h1 className="text-5xl text-primary">
                    Seus serviços
                </h1>

                {services.length < 1 && (
                    <div className="flex flex-col items-center h-full justify-center">
                        <img src="/assets/illust_barber_guy_bad.png" alt="Foto do barbeiro" className='w-[200px] lg:w-[230px]' />
                        <h2 className="text-3xl text-[var(--custom-orange)] text-center">
                            Nenhum serviço cadastrado
                        </h2>
                    </div>
                )}

                <ul className="flex flex-col lg:flex-row gap-4 lg:grid lg:grid-flow-col lg:grid-rows-2">
                    {services.map((service) => (
                        <button
                            key={service.id}
                            className="relative bg-cover bg-center bg-no-repeat h-[250px] rounded-2xl overflow-hidden cursor-pointer"
                            onClick={() => handleClickService(service.id)}
                            style={{ backgroundImage: `url(${service.path})` }}
                        >
                            <BoxContent title={service.name} price={service.price} />

                            <CgArrowsExchange
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl"
                            />
                        </button>
                    ))}
                </ul>
            </main>

            <Footer />
        </AppLayout>
    )
}

export default Services