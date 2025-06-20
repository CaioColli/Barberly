import { AuthBodyLayout } from "./auth/auth-layout";

interface AuthProps {
    children: React.ReactNode,
    title?: string,
    span?: string
}
export const AuthLayout = ({children, title, span }: AuthProps) => {
    return (
        <AuthBodyLayout title={title} span={span}>
            {children}
        </AuthBodyLayout>
    )
}