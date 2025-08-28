import { FormEventHandler } from "react"

import { Form } from "./form"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { LoaderCircle } from "lucide-react"

import { useForm } from "@inertiajs/react";
import FormModal from "./ui/modal"
import { Button } from "./ui/teste.button"

type FormModalData = {
    open: string,
    close: string,
    interval: string
}

type OpeningHoursModalProps = {
    onOpen: boolean,
    onClose: () => void
}

const OpeningHoursModal = ({ onOpen, onClose }: OpeningHoursModalProps) => {
    const { data, setData, post, processing, errors, reset } = useForm<FormModalData>({
        open: '',
        close: '',
        interval: ''
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
    }

    return (
        <FormModal modalTitle="Programar horários de funcionamento" onOpen={onOpen} onClose={onClose}>
            <Form onSubmit={submit}>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="open">
                            Abre as:
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
                            Fecha as:
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
                            onChange={(e) => setData('interval', e.target.value)}
                            disabled={processing}
                        />

                        <span className="text-[16px] text-[var(--custom-red)]">{errors.interval}</span>
                    </div>


                    <Button type="submit">
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Cadastrar serviço
                    </Button>
                </div>
            </Form>
        </FormModal>
    )
}

export default OpeningHoursModal;