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
            <label htmlFor={label.toLocaleLowerCase()} className="text-[14px] font-medium leading-[20px] text-white ">{label}</label>
            <select id={label.toLocaleLowerCase()} className="rounded-[8px] px-[12px] border border-[#D6D6D6] w-[318px] h-[44px] outline-none  bg-main-light font-poppins ">
                <SelectOption label='Health care.' value='healthCare' selected />
                <SelectOption label='Health care.' value='healthCare' />
                <SelectOption label='Health care.' value='healthCare' />
            </select>
            <span className='text-[14px] text-[#6B6B6B] font-poppins'>{subLabel}</span>
            
        </div>
    )
}

export default SelectInput
