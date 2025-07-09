import { useState } from "react"

import { Input } from "./input"

type Props = {
    ref: any
    processing: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    index: number
    id: string
    setFileName: (value: string) => void
}

export const FileInput = ({ ref, index, id, onChange, processing, setFileName }: Props) => {

    const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            setFileName(file.name);
        }
    }

    return (
        <Input
            ref={ref}
            type="file"
            id={id}
            required
            accept="image/png, image/jpeg, image/jpg"
            className="w-full pt-12 pb-12 opacity-0"
            autoFocus
            tabIndex={index}
            onChange={(e) => {
                handleChangeFile(e);
                onChange(e);
            }}
            disabled={processing}
        />
    )
}