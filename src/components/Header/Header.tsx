import HeaderItem from './HeaderItem'

const Header = () => {
  return (
    <div className='flex justify-evenly items-center bg-main xl:h-[115px] lg:h-[105px] md:h-[96px] h-[70px] rounded-[15px]'>
      <HeaderItem label='Trading' soon />
      <span className='bg-[#B9B9B9] w-[1.47px] xl:h-[48px] lg:h-[40px] md:h-[33px] h-[21px]  '></span>
      <HeaderItem label='Automation' soon />
      <span className='bg-[#B9B9B9] w-[1.47px] xl:h-[48px] lg:h-[40px] md:h-[33px] h-[21px] '></span>
      <HeaderItem label='Portfolio' soon />
      <span className='bg-[#B9B9B9] w-[1.47px] xl:h-[48px] lg:h-[40px] md:h-[33px] h-[21px] '></span>
      <HeaderItem label='Alerts' />
      <span className='bg-[#B9B9B9] w-[1.47px] xl:h-[48px] lg:h-[40px] md:h-[33px] h-[21px] '></span>
      <HeaderItem label='Training' />
    </div>
  )
}

export default Header
