import { FC } from "react"

interface SubHeaderProps {
    label: string
}

const SubHeader: FC<SubHeaderProps> = ({
    label
}) => {
    return (
        <div className='rounded-xl bg-custom-black w-full  flex justify-start items-center 2xl:pl-[42px] xl:pl-[32px] md:pl-[26px] pl-[16px] 2xl:py-[7px]  py-[6px]  pr-[27px] 2xl:min-h-[76.3px] xl:min-h-[70px] min-h-[65px]'>
            <p className='text-var-24 font-sans'>{label}</p>
        </div>
    )
}

export default SubHeader
