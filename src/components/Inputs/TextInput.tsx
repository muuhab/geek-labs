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
            <label htmlFor={label.toLocaleLowerCase()} className=" font-medium  text-white text-var-14 ">{label}</label>
            <input type={type}
                placeholder={placeholder} className="rounded-[8px] px-[12px] text-var-14 placeholder:text-[#414141] border border-[#D6D6D6] input-dim outline-none bg-transparent   " id={label.toLocaleLowerCase()} />


        </div>
    )
}

export default TextInput
