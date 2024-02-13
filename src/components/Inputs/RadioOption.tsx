import { FC } from "react"
import { cn } from "../../lib/util"
import Check from '../../assets/check.png'
import Check2 from '../../assets/check2.png'
import Check3 from '../../assets/check3.png'

interface RadioOptionProps {
    name: string
    label: string
    id: string
    value?: string
    peer?: string
    classNames?: string
    variant?: "default" | "bold" | "accent"
}

const RadioOption: FC<RadioOptionProps> = ({
    id,
    label,
    name,
    value,
    peer,
    classNames,
    variant

}) => {
    return (
        <>
            <input id={id} type="radio" value={value} name={name} className={cn(
                ` opacity-0 hidden`,
                peer && peer
            )} />
            <label htmlFor={id} className={cn(
                `flex gap-[12px] px-[8px] py-[12px] rounded-[4px] cursor-pointer items-center   text-[14px] text-[#6B6B6B] font-poppins`,
                classNames && classNames
            )}><img src={variant === 'bold' ? Check3 : variant === 'accent' ? Check2 : Check} /> {label}</label>
        </>
    )
}

export default RadioOption
