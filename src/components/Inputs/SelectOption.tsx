import { FC } from "react"
// import OptionIcon from '../../assets/layer.png'

interface SelectOptionProps {
    label: string
    value: string
    selected?: boolean
}

const SelectOption: FC<SelectOptionProps> = ({ label, selected, value }) => {
    return (
        <option className='font-poppins   flex gap-[12px] px-[8px] py-[12px] rounded-[4px] cursor-pointer items-center text-var-14  text-[#6B6B6B] !p-4 ' selected={selected} value={value}>
            {/* <img className=" size-[120px]" src={OptionIcon}/> */}
            {label}
        </option>
    )
}

export default SelectOption
