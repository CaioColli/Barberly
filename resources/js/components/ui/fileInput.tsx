import React from 'react'
import { Input } from "./input"

type Props = {
    processing: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    index: number
    id: string
    required?: boolean
    setFileName: (value: string) => void
}

export const FileInput = React.forwardRef<HTMLInputElement, Props>(({ index, id, required = false, onChange, processing, setFileName }, ref) => {
        const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (file) {
                setFileName(file.name);
            }
        };

        return (
            <Input
                ref={ref}
                type="file"
                id={id}
                required={required}
                accept="image/png, image/jpeg, image/jpg"
                className="w-full pt-12 pb-12 opacity-0 cursor-pointer"
                autoFocus
                tabIndex={index}
                onChange={(e) => {
                    handleChangeFile(e);
                    onChange(e);
                }}
                disabled={processing}
            />
        );
    }
);
