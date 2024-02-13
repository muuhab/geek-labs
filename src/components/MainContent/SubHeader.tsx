import { FC } from "react"

interface SubHeaderProps {
    label: string
}

const SubHeader: FC<SubHeaderProps> = ({
    label
}) => {
    return (
        <div className='rounded-xl bg-custom-black w-full  flex justify-start items-center pl-[42px] py-[7px]  pr-[27px] min-h-[76.3px]'>
            <p className='2xl:text-[24px] xl:text-[20px] font-sans text-white leading-[32px]'>{label}</p>
        </div>
    )
}

export default SubHeader
