import { FormEventHandler } from "react"

import { router, useForm, usePage } from "@inertiajs/react";

import { LoaderCircle } from "lucide-react"

import { Form } from "./form"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import Select from "./ui/selectTeste"
import Modal from "./ui/modal"
import { Button } from "./ui/teste.button"

type FormModalData = {
    dayOpen: string,
    dayClose: string,
    open: string,
    close: string,
    interval: number | string
}

type OpeningHoursModalProps = {
    onOpen: boolean,
    onClose: () => void
}

interface operation {
    id: number
    dayOpen: string
    dayClose: string
    open: string
    close: string
    interval: string
}

const Operation = ({ onOpen, onClose }: OpeningHoursModalProps) => {
    const { operations } = usePage().props as unknown as { operations: operation[] }

    const [operation] = operations;

    const { data, setData, post, processing, errors, reset } = useForm<FormModalData>({
        dayOpen: operation ? operation.dayOpen : '',
        dayClose: operation ? operation.dayClose : '',
        open: operation ? operation.open : '',
        close: operation ? operation.close : '',
        interval: operation ? operation.interval : ''
    });


    const submit: FormEventHandler = (e) => {
        e.preventDefault();


        if (operation) {
            post(`/admin/openingHours/${operation.id}`, {
                onSuccess: () => {
                    reset();
                    onClose();
                    router.visit('openingHours')
                },
                onError: () => {
                    console.log(errors)
                }
            })
        } else {
            post('/admin/openingHours', {
                onSuccess: () => {
                    reset();
                    onClose();
                    router.visit('openingHours');
                },
                onError: () => {
                    console.log(errors)
                }
            });
        }


    }

    const daysInWeek = [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado'
    ];

    return (
        <Modal
            modalTitle={operation ? 'Reprogramar funcionamento' : 'Programar funcionamento'}
            onOpen={onOpen} 
            onClose={onClose}
        >
            <Form onSubmit={submit}>
                <div className="flex flex-col gap-6">

                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl text-[var(--custom-black)]">Defina os dias de funcionamento</h2>

                        <div className="flex gap-4 w-full">
                            <div className="flex flex-col gap-2 flex-1">
                                <Label htmlFor="open">
                                    De:
                                </Label>

                                <Select
                                    onChange={(e) => setData('dayOpen', e.target.value)}
                                    value={data.dayOpen}
                                >
                                    <option value="" disabled hidden>
                                        Selecione uma opção
                                    </option>
                                    {daysInWeek.map((day, index) => (
                                        <option key={index} value={day}>
                                            {day}
                                        </option>
                                    ))}
                                </Select>

                                <span className="text-[16px] text-[var(--custom-red)]">{errors.open}</span>
                            </div>

                            <div className="flex flex-col gap-2 flex-1">
                                <Label htmlFor="open">
                                    Até:
                                </Label>

                                <Select
                                    onChange={(e) => setData('dayClose', e.target.value)}
                                    value={data.dayClose}
                                >
                                    <option value="" disabled hidden>
                                        Selecione uma opção
                                    </option>
                                    {daysInWeek.map((day, index) => (
                                        <option key={index} value={day}>
                                            {day}
                                        </option>
                                    ))}
                                </Select>

                                <span className="text-[16px] text-[var(--custom-red)]">{errors.open}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl text-[var(--custom-black)]">Defina os horários de funcionamento</h2>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="open">
                                De:
                            </Label>

                            <Input
                                type="time"
                                id="open"
                                required
                                autoFocus
                                value={data.open}
                                tabIndex={1}
                                onChange={(e) => setData('open', e.target.value)}
                                disabled={processing}
                            />

                            <span className="text-[16px] text-[var(--custom-red)]">{errors.open}</span>
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="close">
                                Até:
                            </Label>

                            <Input
                                type="time"
                                id="close"
                                required
                                autoFocus
                                value={data.close}
                                tabIndex={2}
                                onChange={(e) => setData('close', e.target.value)}
                                disabled={processing}
                            />

                            <span className="text-[16px] text-[var(--custom-red)]">{errors.close}</span>
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="interval">
                                Intervalo entre os serviços:
                            </Label>

                            <Input
                                type="number"
                                id="interval"
                                required
                                autoFocus
                                value={data.interval}
                                tabIndex={3}
                                placeholder="Digite o intervalo entre os serviços"
                                onChange={(e) => setData('interval', Number(e.target.value))}
                                disabled={processing}
                            />

                            <span className="text-[16px] text-[var(--custom-red)]">{errors.interval}</span>
                        </div>
                    </div>


                    <Button type="submit">
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Confirmar
                    </Button>
                </div>
            </Form>
        </Modal>
    )
}

export default Operation;