import { Head } from "@inertiajs/react"

import { FormEventHandler } from "react"

import { BreadcrumbItem } from "@/types"

import AppLayout from "@/layouts/app-layout"
import { Form } from "@/components/form"

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Barberly',
        href: '/admin/addService',
    }
]

const AddService = () => {
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs} isAdmin={true}>
            <Head title="Adicionar Serviço" />

            <section className="px-6 lg:px-8">
                <h1 className="text-5xl max-w-[600px]">Adicionar novo serviço</h1>

                <Form onSubmit={submit}>
                    <></>
                </Form>
            </section>

        </AppLayout>
    )
}


export default AddService