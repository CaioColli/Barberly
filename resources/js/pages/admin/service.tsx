import { Form } from "@/components/form";
import { CurrencyInput } from "@/components/ui/currencyInput";
import { FileInput } from "@/components/ui/fileInput";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/teste.button";
import { deleteFile } from "@/helpers/deleteFile";
import AppLayout from "@/layouts/app-layout";
import { FormLayout } from "@/layouts/form-layout";

import { BreadcrumbItem } from "@/types";
import { FormData } from "@/types/service";

import { Head, useForm, usePage } from "@inertiajs/react"
import { LoaderCircle } from "lucide-react";

import { FormEventHandler, useRef, useState } from "react";

import { FaFileImage } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

interface Service {
    id: number
    name: string
    price: string
    path: string
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Barberly',
        href: '/admin/addService',
    }
]

const Service = () => {
    const { service } = usePage().props as unknown as { service: Service }

    const { data, setData, post, processing, errors, delete: destroy, reset } = useForm<FormData>({
        name: '',
        price: '',
        file: ''
    });

    const [fileName, setFileName] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(`/admin/service/${service.id}`, {
            method: 'patch',
            forceFormData: true,
            onSuccess: () => {
                handleDeleteFile();
                reset();
            },

            onError: () => {
                console.table(errors);
            }
        });
    }

    const handleDeleteFile = () => {
        deleteFile({
            setFileName,
            fileInputRef,
            setData
        });
    }

    const handleDeleteService = (id: number) => {
        destroy(`/admin/service/${id}`)
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs} isAdmin={true}>
            <Head title={service.name} />
            <FormLayout title={service.name}>
                <Form onSubmit={submit}>
                    <div className="flex flex-col gap-6">

                        {/* Name Input */}
                        <div className="flex flex-col gap-2">
                            <Label>
                                Editar nome
                            </Label>

                            <Input
                                type="text"
                                id="name"
                                autoFocus
                                value={data.name}
                                tabIndex={1}
                                placeholder={service.name}
                                onChange={e => setData('name', e.target.value)}
                                disabled={processing}
                            />
                            <span className="text-[16px] text-[var(--custom-red)]">{errors.name}</span>
                        </div>

                        {/* Price Input */}
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="price">
                                Editar preço
                            </Label>
                            <CurrencyInput
                                setData={setData}
                                id="price"
                                placeholder={`${Number(service.price).toLocaleString('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                })}`}
                                value={data.price}
                                index={2}
                                processing={processing}
                            />
                            <span className="text-[16px] text-[var(--custom-red)]">{errors.price}</span>
                        </div>

                        {/* Image Input */}
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="image">
                                Editar imagem
                            </Label>
                            <div className="bg-[#ffffff] rounded-[8px] border-[1px] border-[var(--custom-black)] shadow-[4px_5px_0_0_var(--custom-black)] relative">
                                <FileInput
                                    ref={fileInputRef}
                                    index={3}
                                    id="image"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];

                                        if (file) {
                                            setData('file', file);
                                        }
                                    }}
                                    processing={processing}
                                    setFileName={setFileName}
                                />

                                {fileName && (
                                    <IoCloseOutline className="text-[var(--custom-black)] text-4xl absolute top-0 right-0 cursor-pointer"
                                        onClick={handleDeleteFile}
                                    />
                                )}

                                <FaFileImage className="text-[var(--custom-black)] text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                                {!fileName && (
                                    <span className="text-[var(--custom-black)] absolute bottom-1 left-1/2 -translate-x-1/2 pointer-events-none w-full text-center">
                                        Trocar imagem
                                    </span>
                                )}

                                <span className="text-[var(--custom-black)] absolute bottom-1 left-1/2 -translate-x-1/2 pointer-events-none w-full text-center">
                                    {fileName}
                                </span>
                            </div>
                            <span className="text-[16px] text-[var(--custom-red)]">{errors.file}</span>
                        </div>

                        <Button type="submit">
                            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                            Cadastrar serviço
                        </Button>

                    </div>
                </Form>

                <Button
                    type="submit"
                    className="bg-[var(--custom-red)] mt-8"
                    onClick={() => handleDeleteService(service.id)}
                >
                    Deletar serviço
                </Button>
            </FormLayout>
        </AppLayout>
    )
}

export default Service