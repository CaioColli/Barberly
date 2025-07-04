import AppLayout from "@/layouts/app-layout"

import { BreadcrumbItem } from "@/types"
import { Head } from "@inertiajs/react"

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Barberly',
        href: '/admin/addService',
    }
]

const AddService = () => {
    return (
        <AppLayout breadcrumbs={breadcrumbs} isAdmin={true}>
            <Head title="Adicionar Serviço" />


            <h1>Adicionar Serviço</h1>
        </AppLayout>
    )
}


export default AddService