import { FC } from "react"

interface TextInputProps {
    type?: string
    label: string
    placeholder?: string

}

const TextInput: FC<TextInputProps> = ({
    type,
    label,
    placeholder
}) => {
    return (
        <div className='flex flex-col gap-2'>
            <label htmlFor={label.toLocaleLowerCase()} className="text-[14px] font-medium leading-[20px] text-white ">{label}</label>
            <input type={type}
                placeholder={placeholder} className="rounded-[8px] px-[12px] text-[14px] leading-[20px] placeholder:text-[#414141] border border-[#D6D6D6] w-[318px] h-[44px] outline-none bg-transparent   " id={label.toLocaleLowerCase()} />


        </div>
    )
}

export default TextInput
