import { FC } from 'react'
import SelectOption from './SelectOption'

interface SelectInputProps {
    label: string
    subLabel?: string
}

const SelectInput: FC<SelectInputProps> = ({
    label,
    subLabel
}) => {
    return (
        <div className='flex flex-col gap-2 font-poppins'>
            <label htmlFor={label.toLocaleLowerCase()} className="text-var-14 font-medium text-white ">{label}</label>
            <select id={label.toLocaleLowerCase()} className="rounded-[8px] px-[12px] border border-[#D6D6D6]  input-dim outline-none  bg-main-light font-poppins text-var-14  ">
                <SelectOption label='Health care.' value='healthCare' selected />
                <SelectOption label='Health care.' value='healthCare' />
                <SelectOption label='Health care.' value='healthCare' />
            </select>
            <span className='text-var-14 text-[#6B6B6B] font-poppins'>{subLabel}</span>

        </div>
    )
}

export default SelectInput
