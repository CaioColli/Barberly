import { cn } from "@/lib/utils"

interface FormProps {
    className?: string
    children: React.ReactNode
    onSubmit: (event: React.FormEvent) => void;
}

export const FormBodyLayout = ({ className, children, onSubmit }: FormProps ) => {
    return (
        <form className={cn('flex-1 flex flex-col justify-between py-[48px] px-[24px] lg:px-[32px] relative gap-[32px]', className)} onSubmit={onSubmit}>
            {children}
        </form>
    )
}