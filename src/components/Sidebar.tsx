import SelectInput from './Inputs/SelectInput'
import TextInput from './Inputs/TextInput'
import RadioOption from './Inputs/RadioOption'

const Sidebar = () => {
    return (
        <div className='bg-main-light rounded-[15px] 3xl:w-3/12 lg:w-[361px] md:w-[230px] w-[170px]  pt-[23px] pl-[27px] pr-[16px] pb-[25px] flex flex-col items-start'>
            <p className=' 2xl:text-[32px] xl:text-[29px] lg:text-[24px] text-[22px] font-inter text-white font-bold text-center self-center'>Filters</p>
            <div className="flex flex-col lg:gap-[22px] gap-[16px] w-full">
                <SelectInput label='Industry' subLabel='Choose something.' />
                <SelectInput label='Market Cap' subLabel='Press Apply to see changes.' />
                <SelectInput label='Risk' subLabel='Press Apply to see changes.' />
                <TextInput label='Risk' placeholder='Insert text here' />
                {/* <SelectInputVariant/> */}
            </div>
            <div className="flex flex-col rounded-[8px] py-[2px] border border-border w-full px-[4px] mt-[8px] ">

                <RadioOption
                    id='default-radio-1'
                    name="default-radio"
                    label='Low risk'
                    value='default-radio1'
                    peer='peer/default-radio-1'
                    classNames={`peer-checked/default-radio-1:bg-[#F1F3F5] peer-checked/default-radio-1:text-[#6B6B6B]`}
                />
                <RadioOption
                    id='default-radio-2'
                    name="default-radio"
                    label='Mid-risk'
                    value='default-radio2'
                    peer='peer/default-radio-2'
                    classNames={`peer-checked/default-radio-2:bg-[#F1F3F5] peer-checked/default-radio-2:text-[#6B6B6B]`}
                />
                <RadioOption
                    id='default-radio-3'
                    name="default-radio"
                    label='High risk'
                    value='default-radio3'
                    peer='peer/default-radio-3'
                    classNames={`peer-checked/default-radio-3:bg-[#F1F3F5] peer-checked/default-radio-3:text-[#6B6B6B] text-accent`}
                    variant='accent'
                />
                <RadioOption
                    id='default-radio-4'
                    name="default-radio"
                    label='Option text here'
                    value='default-radio4'
                    peer='peer/default-radio-4'
                    classNames={`peer-checked/default-radio-4:bg-[#F1F3F5] peer-checked/default-radio-4:text-[#6B6B6B] text-[#D6D6D6] `}
                    variant='bold'
                />
            </div>

            <div className='xl:mt-[29px] lg:mt-[26px] md:mt-[19px] mt-[11px] w-full'>
                <button className='bg-btn rounded-[14px] 2xl:h-[70px] xl:h-[60px] lg:h-[40px] h-[30px]  text-var-24 font-semibold font-inter w-full '>
                    Apply Filters
                </button>
            </div>
        </div>
    )
}

export default Sidebar
