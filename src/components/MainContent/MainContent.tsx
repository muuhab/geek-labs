import Dollar from '../../assets/ticker.png'
import Contract from '../../assets/contract.png'
import Volume from '../../assets/volume.png'
import Risk from '../../assets/risk.png'
import SubHeader from './SubHeader'

const MainContent = () => {
    return (
        <div className="bg-main-light rounded-[15px] w-[1335px] flex-grow pb-[18px] flex flex-col items-center justify-between pt-[22px] pl-[13px] pr-[17px] gap-[9px]">

            <div className="flex flex-col w-full   pt-[17px] pb-[24px] 2xl:gap-[26px] xl:gap-[20px] gap-[18px] 2xl:px-[43px] xl:px-[38px] md:px-[30px] px-[15px] border-[0.6px] border-border grad rounded-xl">
                <div className="flex md:flex-row flex-col items-center justify-between font-sans text-var-20 ">
                    <p className='flex items-center xl:gap-2 lg:gap-1 gap-[1px] '><span><img src={Dollar} className='header-icon' /></span> $TSLA</p>
                    <span className='bg-[#B9B9B9] w-[1.47px] h-[21px] rotate-90 md:rotate-0'></span>
                    <p className='flex items-center xl:gap-2 lg:gap-1 gap-[1px] '><span><img src={Contract} className='header-icon' /></span> 200 Contracts</p>
                    <span className='bg-[#B9B9B9] w-[1.47px] h-[21px] rotate-90 md:rotate-0'></span>
                    <p className='flex items-center xl:gap-2 lg:gap-1 gap-[1px] '><span><img src={Volume} className='header-icon' /></span> 12.2%</p>
                    <span className='bg-[#B9B9B9] w-[1.47px] h-[21px] rotate-90 md:rotate-0'></span>

                    <p className='flex items-center xl:gap-2 lg:gap-1 gap-[1px] '><span><img src={Risk} className='header-icon' /></span> High risk</p>
                </div>
                <p className='font-semibold text-var-26 font-sans'>Someone Just bought xxxx contracts of $XYZ, this is notable because the relative volume on this options trade is X.X%.</p>
            </div>


            <SubHeader label='X company released a short report on $XYZ, High IV option sales opps' />
            <SubHeader label='$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.' />
            <SubHeader label='$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.' />
            <SubHeader label='$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.' />
            <SubHeader label='$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.' />
            <SubHeader label='$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.' />


        </div>
    )
}

export default MainContent
