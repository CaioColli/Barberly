import { FormBodyLayout } from "./form/form-layout"

interface FormProps {
    children: React.ReactNode,
    title?: string,
    span?: string
}
export const FormLayout = ({children, title, span }: FormProps) => {
    return (
        <FormBodyLayout title={title} span={span}>
            {children}
        </FormBodyLayout>
    )
}