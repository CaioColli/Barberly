import { Head } from "@inertiajs/react"

import { FormEventHandler, useState } from "react"

import { BreadcrumbItem } from "@/types"

import AppLayout from "@/layouts/app-layout"
import { Form } from "@/components/form"
import { FormLayout } from "@/layouts/form-layout"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

import { FaFileImage } from "react-icons/fa";
import { Button } from "@/components/ui/teste.button"

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Barberly',
        href: '/admin/addService',
    }
]

const AddService = () => {
    const [file, setFile] = useState('Nenhum arquivo selecionado');
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
    }

    const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            setFile(file.name);
        } else {
            setFile('Nenhum arquivo selecionado');
        }
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs} isAdmin={true}>
            <Head title="Adicionar Serviço" />
            <FormLayout title="Adicionar novo serviço">
                <Form onSubmit={submit}>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="name">
                                Nome do serviço
                            </Label>
                            <Input
                                type="text"
                                id="name"
                                required
                                autoFocus
                                tabIndex={1}
                                placeholder="Digite seu novo serviço"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="price">
                                Preço do serviço
                            </Label>
                            <Input
                                type="number"
                                id="price"
                                required
                                autoFocus
                                tabIndex={2}
                                placeholder="Digite o preço do serviço"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="image">
                                Imagem do serviço
                            </Label>
                            <div className="bg-[#ffffff] rounded-[8px] border-[1px] border-[var(--custom-black)] shadow-[4px_5px_0_0_var(--custom-black)] relative">
                                <Input
                                    type="file"
                                    id="image"
                                    required
                                    accept="image/png, image/jpeg, image/jpg"
                                    className="w-full pt-12 pb-12 opacity-0"
                                    onChange={handleChangeFile}
                                />
                                <FaFileImage className="text-[var(--custom-black)] text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                                <span className="text-[var(--custom-black)] absolute bottom-1 left-1/2 -translate-x-1/2 pointer-events-none w-full text-center">
                                    {file}
                                </span>
                            </div>
                        </div>

                        <Button
                            type="submit"
                        >
                            Cadastrar serviço
                        </Button>
                    </div>
                </Form>
            </FormLayout>
        </AppLayout>
    )
}


export default AddService