import { useState } from "react";

import { Input } from "./input"

type Props = {
    setData: (key: string, value: string) => void
    id: string
    index: number
    processing: boolean
}

export const CurrencyInput = ({ setData, id, index, processing  }: Props) => {
    const [displayValue, setDisplayValue] = useState('R$ 0,00');

    const handleCurrencyFormat = (e: React.ChangeEvent<HTMLInputElement>) => {
        let input = e.target.value.replace(/\D/g, '');

        // Divide em reais e centavos
        let int = input.slice(0, input.length - 2);
        let decimal = input.slice(-2);

        let formattedInt = int.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

        let final = `R$ ${formattedInt},${decimal}`;

        setDisplayValue(final);

        const value = parseFloat(int + '.' + decimal);

        setData('value', value.toString());
    };

    return (
        <Input
            type="text"
            id={id}
            required
            autoFocus
            tabIndex={index}
            onChange={handleCurrencyFormat}
            value={displayValue}
            disabled={processing}
        />
    )
}