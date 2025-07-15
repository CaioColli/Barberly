import { NumericFormat } from "react-number-format"

interface BoxContentProps {
    title: string
    price: string
}

export const BoxContent = ({ title, price }: BoxContentProps) => {
    return (
        <>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-0" />

            <div className="z-10 relative flex flex-col justify-between items-baseline h-full p-4 text=[var(--custom-middle-white)]">
                <h1 className="text-[20px]">
                    {title}
                </h1>

                <NumericFormat
                    value={price}
                    disabled
                    thousandSeparator="."
                    decimalSeparator=","
                    prefix="R$ "
                    decimalScale={2}
                    fixedDecimalScale
                    className="text-2xl w-full"
                />
            </div>
        </>
    )
}