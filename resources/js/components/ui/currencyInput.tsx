import { NumericFormat } from 'react-number-format';

type Props = {
    setData: (key: string, value: string) => void
    id: string
    value: number | string
    placeholder: string
    index: number
    processing: boolean
}

export const CurrencyInput = ({ setData, id, placeholder, index, processing, value }: Props) => {
    return (
        <NumericFormat
            id={id}
            value={value}
            placeholder={placeholder}
            onValueChange={(values) => {
                setData(id, values.floatValue?.toString() ?? '0');
            }}
            thousandSeparator="."
            decimalSeparator=","
            prefix="R$ "
            decimalScale={2}
            fixedDecimalScale
            allowNegative={false}
            tabIndex={index}
            disabled={processing}
            className='rounded-[8px] border-[1px] border-[var(--custom-black)] py-[8px] pl-[8px] text-[var(--custom-black)] placeholder:text-[var(--custom-gray)] shadow-[4px_5px_0_0_var(--custom-black)] outline-none focus:shadow-[6px_7px_0_0_var(--custom-black)] transition-all duration-200 bg-[#ffffff]'
        />
    )
}