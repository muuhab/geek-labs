import HeaderItem from './HeaderItem'

const Header = () => {
  return (
    <div className='flex justify-evenly items-center bg-main h-[115px] rounded-[15px]'>
      <HeaderItem label='Trading' soon/>
      <span className='bg-[#B9B9B9] w-[1.47px] h-[48px]  '></span>
      <HeaderItem label='Automation' soon/>
      <span className='bg-[#B9B9B9] w-[1.47px] h-[48px]'></span>
      <HeaderItem label='Portfolio' soon/>
      <span className='bg-[#B9B9B9] w-[1.47px] h-[48px]'></span>
      <HeaderItem label='Alerts'/>
      <span className='bg-[#B9B9B9] w-[1.47px] h-[48px]'></span>
      <HeaderItem label='Training'/>
    </div>
  )
}

export default Header
