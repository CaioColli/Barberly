import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'rounded-[8px] border-[1px] border-[var(--custom-black)] py-[8px] pl-[8px] text-[var(--custom-black)] placeholder:text-[var(--custom-gray)] shadow-[4px_5px_0_0_var(--custom-black)] outline-none focus:shadow-[6px_7px_0_0_var(--custom-black)] transition-all duration-200',
        className
      )}
      {...props}
    />
  )
}

export { Input }
