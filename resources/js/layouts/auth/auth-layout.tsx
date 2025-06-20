import { Footer } from "@/components/ui/footer";

interface AuthProps {
    children: React.ReactNode;
    title?: string;
    span?: string;
}

export const AuthBodyLayout = ({ children, title, span }: AuthProps) => {
    return (
        <>
            <section className="min-h-dvh flex flex-col items-center bg-[var(--custom-black-bg)]">
                <header className="py-[64px] px-[24px] flex flex-col justify-start w-full">
                    <h1 className="text-[32px] lg:text-[48px] font-azonix max-w-[600px]">
                        {title}
                    </h1>

                    <span className="text-2xl">
                        {span}
                    </span>
                </header>

                <main className="w-screen bg-[var(--custom-middle-white)] flex-1 flex flex-col rounded-t-[16px]">
                    {children}
                </main>
                
                <Footer />
            </section>
        </>
    )
}