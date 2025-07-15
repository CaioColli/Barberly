import { usePage } from "@inertiajs/react"

interface Service {
    id: number
}

const Service = () => {
    const { service } = usePage().props as unknown as { service: Service }

    console.log(service);

    return (
        <h1>Hello world!</h1>
    )
}

export default Service