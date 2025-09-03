

type SelectProps = {
    value?: string
    children: React.ReactNode,
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select = ({ value, children, onChange }: SelectProps) => {
    return (
        <select
            value={value}
            defaultValue=""
            onChange={onChange}
            required
            className='rounded-[8px] border-[1px] border-[var(--custom-black)] py-[8px] pl-[8px] text-[var(--custom-black)] shadow-[4px_5px_0_0_var(--custom-black)] outline-none focus:shadow-[6px_7px_0_0_var(--custom-black)] transition-all duration-200 bg-[#ffffff]'>

            {children}
        </select >
    )
}


export default Select;