import { useState } from "react";

import { Head, Link, router, usePage } from "@inertiajs/react";

import { BreadcrumbItem } from "@/types";

import AppLayout from "@/layouts/app-layout";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/ui/footer";
import Operation from "@/components/operation";
import { removeSeconds } from "@/helpers/removeSeconds";
import { removeDayFullName } from "@/helpers/removeDataFullName";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Barberly',
        href: '/admin/openingHours',
    }
]

interface operation {
    dayOpen: string
    dayClose: string
    open: string
    close: string
}
const OpeningHours = () => {
    const { operations } = usePage().props as unknown as { operations: operation[] }

    const [operation] = operations

    console.log(operation)

    const dayOpen = operation ? removeDayFullName(operation.dayOpen) : undefined;
    const dayClose = operation ? removeDayFullName(operation.dayClose) : undefined;
    const openTime = operation ? removeSeconds(operation.open) : undefined;
    const closeTime = operation ? removeSeconds(operation.close) : undefined;

    const [modal, setModal] = useState<"operation" | "closingDaysModal" | null>(null)

    const fullWidthStyle = 'w-full'

    return (
        <AppLayout breadcrumbs={breadcrumbs} isAdmin={true} backPage={() => router.get(route('adminDashboard'))}>
            <Head title="horários de funcionamento" />

            <section className="px-6 lg:px-8 h-full relative">
                {modal && (
                    <div className="w-full h-dvh absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[rgba(0,0,0,0.4)]" />
                )}

                <header className="flex flex-col gap-6">
                    <h1 className='text-5xl'>
                        horários de funcionamento
                    </h1>

                    <div className="flex flex-col gap-0">
                        <span className="text-2xl text-[var(--custom-orange)]">
                            {operation
                                ? ` ${dayOpen} - ${dayClose}`
                                : 'Nenhuma dia cadastrado'
                            }
                        </span>
                        <span className="text-2xl">
                            {operation
                                ? `${openTime} - ${closeTime}`
                                : 'Nenhum horário cadastrado'
                            }
                        </span>
                    </div>
                </header>

                <ul className="flex flex-col gap-2 mt-6">
                    <li>
                        <Button className={fullWidthStyle} onClick={() => setModal("operation")}>
                            {operation
                                ? 'Reprogramar funcionamento'
                                : 'Programar funcionamento'
                            }
                        </Button>
                    </li>
                    <li>
                        <Button className={fullWidthStyle} onClick={() => setModal("closingDaysModal")}>
                            Programar fechamento
                        </Button>
                    </li>
                </ul>
            </section>

            <Operation onOpen={modal === "operation"} onClose={() => setModal(null)} />
            <Footer />
        </AppLayout>
    )
}

export default OpeningHours;