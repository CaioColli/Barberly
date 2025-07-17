import { Head, useForm } from "@inertiajs/react"

import { FormEventHandler, useRef, useState } from "react"

import { BreadcrumbItem } from "@/types"

import AppLayout from "@/layouts/app-layout"
import { Form } from "@/components/form"
import { FormLayout } from "@/layouts/form-layout"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

import { FaFileImage } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { LoaderCircle } from 'lucide-react';

import { Button } from "@/components/ui/teste.button"
import { FileInput } from "@/components/ui/fileInput"
import { CurrencyInput } from "@/components/ui/currencyInput"
import { deleteFile } from "@/helpers/deleteFile"

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Barberly',
        href: '/admin/addService',
    }
]

type FormData = {
    name: string,
    price: string,
    file: File | string
}

const AddService = () => {
    const { data, setData, post, processing, errors, reset } = useForm<FormData>({
        name: '',
        price: '',
        file: ''
    });

    const [fileName, setFileName] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post('/admin/addService', {
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

    return (
        <AppLayout breadcrumbs={breadcrumbs} isAdmin={true}>
            <Head title="Adicionar Serviço" />
            <FormLayout title="Adicionar novo serviço">
                <Form onSubmit={submit}>
                    <div className="flex flex-col gap-6">
                        {/* Name Input */}
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="name">
                                Nome do serviço
                            </Label>
                            <Input
                                type="text"
                                id="name"
                                required
                                autoFocus
                                value={data.name}
                                tabIndex={1}
                                placeholder="Digite seu novo serviço"
                                onChange={e => setData('name', e.target.value)}
                                disabled={processing}
                            />
                            <span className="text-[16px] text-[var(--custom-red)]">{errors.name}</span>
                        </div>

                        {/* Price Input */}
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="price">
                                Preço do serviço
                            </Label>
                            <CurrencyInput
                                setData={setData}
                                id="price"
                                placeholder="digite o preço de seu novo serviço"
                                value={data.price}
                                index={2}
                                processing={processing}
                            />
                            <span className="text-[16px] text-[var(--custom-red)]">{errors.price}</span>
                        </div>

                        {/* Image Input */}
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="image">
                                Imagem do serviço
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
                                    required
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
                                        Subir imagem
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
            </FormLayout>
        </AppLayout>
    )
}


export default AddService