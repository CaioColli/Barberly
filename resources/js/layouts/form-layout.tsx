import React from "react"
import { FormBodyLayout } from "./form/form-layout"

interface FormProps {
    className?: string
    children: React.ReactNode
    onSubmit: (event: React.FormEvent) => void;
}
export const FormLayout = ({children, className, onSubmit}: FormProps) => {
    return (
        <FormBodyLayout className={className} onSubmit={onSubmit}>
            {children}
        </FormBodyLayout>
    )
}