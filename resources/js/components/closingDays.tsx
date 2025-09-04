import { FormEventHandler } from "react";

import { useForm } from "@inertiajs/react";

import { Form } from "./form";
import Modal from "./ui/modal";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/teste.button";
import { LoaderCircle } from "lucide-react";
import Calendar from "./ui/calendar";


type FormData = {
    day: string,
    initialHour: string,
    finalHour: string,
}

type OpeningHoursModalProps = {
    onOpen: boolean,
    onClose: () => void
}

const ClosingDays = ({ onOpen, onClose }: OpeningHoursModalProps) => {
    const { data, setData, post, processing, errors, reset } = useForm<FormData>({
        day: '',
        initialHour: '',
        finalHour: ''
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post('/admin/closingDays', {
            onSuccess: () => {
                reset();
                onClose();
            },
            onError: () => {
                console.log(errors)
            }
        })
    }

    return (
        <Modal
            modalTitle='Programar fechamento'
            onOpen={onOpen}
            onClose={onClose}
        >
            <Form onSubmit={submit}>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl text-[var(--custom-black)]">Defina o dia e horários para o fechamento</h2>

                        <div className="flex gap-4 w-full">
                            <div className="flex flex-col gap-2 flex-1">
                                <Label htmlFor="open">
                                    Selecione o dia
                                </Label>

                                <div className="p-2 rounded-2xl bg-background-primary w-fit">
                                    <Calendar
                                        essentialContent={false}
                                        onDateChange={(date) => setData('day', date || '')}
                                    />
                                </div>
                                <span className="text-[16px] text-[var(--custom-red)]">{errors.day}</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 w-full">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-2xl text-[var(--custom-black)]">Defina os horários de funcionamento
                                    <span className="text-[16px] text-[var(--custom-dark-gray)]">
                                        (opcional)
                                    </span>
                                </h2>
                                <p className="text-[16px] text-[var(--custom-dark-gray)]">
                                    Se não houver horário de fechamento definido, o estabelecimento ficará fechado durante todo o dia.
                                </p>
                            </div>

                            <div className="flex gap-4 w-full">
                                <div className="flex flex-col gap-2 flex-1">
                                    <Label htmlFor="open">
                                        De:
                                    </Label>

                                    <Input
                                        type="time"
                                        id="open"
                                        autoFocus
                                        value={data.initialHour}
                                        tabIndex={1}
                                        onChange={(e) => setData('initialHour', e.target.value)}
                                        disabled={processing}
                                    />
                                    <span className="text-[16px] text-[var(--custom-red)]">{errors.initialHour}</span>
                                </div>

                                <div className="flex flex-col gap-2 flex-1">
                                    <Label htmlFor="open">
                                        De:
                                    </Label>

                                    <Input
                                        type="time"
                                        id="open"
                                        autoFocus
                                        value={data.finalHour}
                                        tabIndex={1}
                                        onChange={(e) => setData('finalHour', e.target.value)}
                                        disabled={processing}
                                    />
                                    <span className="text-[16px] text-[var(--custom-red)]">{errors.finalHour}</span>
                                </div>
                            </div>
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

export default ClosingDays;