import { FC } from "react"

interface HeaderItemProps {
    label: string
    soon?: boolean
}
const HeaderItem: FC<HeaderItemProps> = ({ label, soon }) => {
    return (
        <div className="flex flex-col items-center  xl:-space-y-2 lg:-space-y-1  ">
            {soon &&
                <span className="  rounded-[12px] w-fit px-[5px] pb[2px] font-inter  bg-secondary text-center text-var-15 ">
                    coming soon
                </span>
            }
            <h4 className="text-var-28 font-inter  text-[#4848484D] text-center font-bold hover:text-white transition">
                {label}
            </h4>
        </div>
    )
}

export default HeaderItem
