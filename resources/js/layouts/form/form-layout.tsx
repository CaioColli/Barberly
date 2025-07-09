import { Footer } from "@/components/ui/footer";

interface FormProps {
    children: React.ReactNode;
    title?: string;
    span?: string;
}

export const FormBodyLayout = ({ children, title, span }: FormProps) => {
    return (
        <>
            <section className="min-h-dvh flex flex-col items-center bg-background-primary">
                <header className="py-6 flex flex-col justify-start w-full text-primary px-[24px] lg:px-[32px]">
                    <h1 className="text-5xl">
                        {title}
                    </h1>

                    <span className="text-2xl">
                        {span}
                    </span>
                </header>

                <main className="w-full lg:w-full bg-background-third flex-1 flex flex-col rounded-t-[16px] py-[48px] px-[24px] lg:px-[32px] relative">
                    {children}
                </main>
                
                <Footer />
            </section>
        </>
    )
}