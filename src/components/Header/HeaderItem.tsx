import { FC } from "react"

interface HeaderItemProps {
    label: string
    soon?:boolean
}
const HeaderItem: FC<HeaderItemProps> = ({ label,soon }) => {
    return (
        <div className="flex flex-col items-center  -space-y-2 ">
            {soon &&
            <span className="  rounded-[12px] w-fit px-[5px] pb[2px] font-inter  bg-secondary text-center 2xl:text-[15px] xl:text-[14px] ">
            coming soon
            </span>
            }
            <h4 className="2xl:text-[48px] xl:text-[43px] font-inter  text-[#4848484D] text-center font-bold hover:text-white transition">
            {label}
            </h4>
        </div>
    )
}

export default HeaderItem
