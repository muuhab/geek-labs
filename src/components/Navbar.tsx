import logo from '../assets/street suite logo-04 1.png'
import searchIcon from '../assets/search.svg'
import Notify from '../assets/notification.png'
import Profile from '../assets/Profile.png'
import Chevron from '../assets/chevron-down.png'

const Navbar = () => {
  return (
    <div className='flex '>
      <img src={logo} alt='logo' className='xl:w-fit lg:w-1/5 w-4/12 ' />
      <div className="flex items-center justify-between flex-grow gap-4 lg:gap-0 rounded-[19px] bg-main 2xl:h-[70px] xl:h-[67px] lg:h-[63px] md:h-[58px] h-[54px] pl-4 pr-[34px] xl:-ml-[80px] lg:-ml-[40px] -ml-[30px]">
        <div className='flex  items-center '>

          <img src={searchIcon} className='text-[#000000]  absolute ml-[17px]' />
          <input className='search-box bg-[#F5F6FA] border-[.6px] border-[#F5F6FA] rounded-full flex justify-center items-center text-black pl-[45px] py-[10px] placeholder:text-[#202224] placeholder:text-opacity-50 text-var-14 outline-none font-sans placeholder:font-sans' placeholder='Search' />
        </div>

        <div className="flex  items-center">
          <img src={Notify} className='2xl:mr-[24px] xl:mr-[20px] md:mr-[18px] mr-[14px] xl:size-fit lg:size-[24px] md:size-[20px] size-[18px]' />

          <span className='rounded-full bg-white   2xl-size-[50px] xl:size-[45px] lg:size-[40px] md:size-[35px] size-[31px] flex justify-center items-center mr-[17px]'>

            <img src={Profile} className='rounded-full  2xl-size-[50px] xl:size-[45px] lg:size-[40px] md:size-[35px] size-[31px]' />
          </span>

          <div className="flex flex-col xl:mr-[26px] lg:mr-[20px] md:mr-[18px] mr-[10px]">
            <p className='font-bold text-var-14 text-[#565656]  font-sans'>Moni Roy</p>
            <p className='font-semibold lg:text-[12px] md:text-[11px] text-[10px] xl:leading-[16px] leading-[14px] text-[#565656] font-sans'>Admin</p>
          </div>
          <span className='border-[0.2px] rounded-full size-[18px] border-[#181818] flex justify-center items-center'>
            <img src={Chevron} className=' ' />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
