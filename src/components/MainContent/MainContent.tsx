import Dollar from '../../assets/ticker.png'
import Contract from '../../assets/contract.png'
import Volume from '../../assets/volume.png'
import Risk from '../../assets/risk.png'
import SubHeader from './SubHeader'

const MainContent = () => {
    return (
        <div className="bg-main-light rounded-[15px] w-[1335px] h-[722px] flex flex-col items-center pt-[22px] pl-[13px] pr-[17px] gap-[9px]">
            
            <div className="flex flex-col w-full   pt-[17px] pb-[24px] gap-[26px] px-[43px] border-[0.6px] border-border grad rounded-xl">
                <div className="flex items-center justify-between font-sans 2xl:text-[20px] xl:[18px] leading-[32px] ">
                    <p className='flex gap-2'><span><img src={Dollar} className='2xl:w-[42px] 2xl:h-[34px] xl:w-[33] xl:h-[27px]' /></span> $TSLA</p>
                    <span className='bg-[#B9B9B9] w-[1.47px] h-[21px]'></span>
                    <p className='flex gap-2'><span><img src={Contract} className='2xl:w-[42px] 2xl:h-[34px] xl:w-[33] xl:h-[27px]' /></span> 200 Contracts</p>
                    <span className='bg-[#B9B9B9] w-[1.47px] h-[21px]'></span>
                    <p className='flex gap-2'><span><img src={Volume} className='2xl:w-[42px] 2xl:h-[34px] xl:w-[33] xl:h-[27px]' /></span> 12.2%</p>
                    <span className='bg-[#B9B9B9] w-[1.47px] h-[21px]'></span>

                    <p className='flex gap-2'><span><img src={Risk} className='2xl:w-[42px] 2xl:h-[34px] xl:w-[33] xl:h-[27px]' /></span> High risk</p>
                </div>
                <p className='font-semibold 2xl:text-[26px] xl:text-[22px] leading-[32px] font-sans'>Someone Just bought xxxx contracts of $XYZ, this is notable because the relative volume on this options trade is X.X%.</p>
            </div>

            
            <SubHeader label='X company released a short report on $XYZ, High IV option sales opps'/>

            <SubHeader label='$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.'/>
            <SubHeader label='$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.'/>
            <SubHeader label='$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.'/>
            <SubHeader label='$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.'/>
            <SubHeader label='$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.'/>


        </div>
    )
}

export default MainContent
