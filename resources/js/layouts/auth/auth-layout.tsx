import { Footer } from "@/components/ui/footer";

interface AuthProps {
    children: React.ReactNode;
    title?: string;
    span?: string;
}

export const AuthBodyLayout = ({ children, title, span }: AuthProps) => {
    return (
        <>
            <section className="min-h-dvh flex flex-col items-center bg-background-primary px-[24px] lg:px-[32px]">
                <header className="py-[64px] flex flex-col justify-start w-full text-primary">
                    <h1 className="text-[32px] lg:text-[48px] font-azonix max-w-[600px]">
                        {title}
                    </h1>

                    <span className="text-2xl">
                        {span}
                    </span>
                </header>

                <main className="w-screen bg-background-third flex-1 flex flex-col rounded-t-[16px] py-[48px] px-[24px] lg:px-[32px] relative">
                    {children}
                </main>
                
                <Footer />
            </section>
        </>
    )
}