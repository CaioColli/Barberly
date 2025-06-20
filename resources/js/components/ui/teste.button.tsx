import { cn } from "@/lib/utils"

interface ButtonProps {
    onClick?: () => void
    type?: HTMLButtonElement['type']
    disabled?: boolean
    className?: string
    tabIndex?: number
    children: React.ReactNode
}

export const Button = ({ type, disabled, className, onClick, tabIndex, children}: ButtonProps) => {
    return (
        <button type={type} className={cn('flex items-center justify-center gap-[4px] text-[var(--custom-middle-white)] text-xl bg-[var(--custom-black)] py-[8px] px-[16px] rounded-[8px] cursor-pointer', className )} tabIndex={tabIndex} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    )
}