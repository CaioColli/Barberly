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

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Barberly',
        href: '/admin/addService',
    }
]

type FormData = {
    name: string,
    value: string,
    path: string
}

const AddService = () => {
    const { data, setData, processing } = useForm<FormData>({
        name: '',
        value: '',
        path: ''
    });

    console.log(data);

    const [fileName, setFileName] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
    }

    const handleDeleteFile = () => {
        setFileName('');

        if (fileInputRef.current) {
            fileInputRef.current.value = '';

            setData('path', '');
        }
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
                                tabIndex={1}
                                placeholder="Digite seu novo serviço"
                                onChange={e => setData('name', e.target.value)}
                                disabled={processing}
                            />
                        </div>

                        {/* Price Input */}
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="price">
                                Preço do serviço
                            </Label>
                            <CurrencyInput 
                                setData={setData}
                                id="price"
                                index={2}
                                processing={processing}
                            />
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
                                        setData('path', e.target.value);
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
                                <span className="text-[var(--custom-black)] absolute bottom-1 left-1/2 -translate-x-1/2 pointer-events-none w-full text-center">
                                    {fileName}
                                </span>
                            </div>
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