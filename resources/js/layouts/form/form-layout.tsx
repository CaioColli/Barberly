import { cn } from "@/lib/utils"

interface FormProps {
    className?: string
    children: React.ReactNode
    onSubmit: (event: React.FormEvent) => void;
}

export const FormBodyLayout = ({ className, children, onSubmit }: FormProps ) => {
    return (
        <form className={cn('flex flex-col gap-[32px]', className)} onSubmit={onSubmit}>
            {children}
        </form>
    )
}