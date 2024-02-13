import logo from '../assets/street suite logo-04 1.png'
import searchIcon from '../assets/search.svg'
import Notify from '../assets/notification.png'
import Profile from '../assets/Profile.png'
import Chevron from '../assets/chevron-down.png'

const Navbar = () => {
  return (
    <div className='flex'>
      <img src={logo} alt='logo'/>
      <div className="flex items-center justify-between flex-grow rounded-[19px] bg-main h-[70px] pl-4 pr-[34px] -ml-[80px]">
        <div className='flex  items-center '>
          <img src={searchIcon} className='text-[#000000]  absolute ml-[17px]' />
          <input className='w-[388px] h-[38px] bg-[#F5F6FA] border-[.6px] border-[#F5F6FA] rounded-full flex justify-center items-center text-black pl-[45px] py-[10px] placeholder:text-[#202224] placeholder:text-opacity-50 text-[14px] outline-none font-sans placeholder:font-sans' placeholder='Search' />
        </div>
        <div className="flex  items-center">
        <img src={Notify}  className='mr-[24px]'/>
        <span className='rounded-full bg-white leading-0  size-[50px] flex justify-center items-center mr-[17px]'>
        <img src={Profile} className='rounded-full  size-[50px]'  />
        </span>
        <div className="flex flex-col mr-[26px]">
          <p className='font-bold text-[14px] text-[#565656] leading-[19px] font-sans'>Moni Roy</p>
          <p className='font-semibold text-[12px] leading-[16px] text-[#565656] font-sans'>Admin</p>
        </div>
        <span className='border-[0.2px] rounded-full size-[18px] border-[#181818] flex justify-center items-center'>
        <img src={Chevron}  className=' '/>
        </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
