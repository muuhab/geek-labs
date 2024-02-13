import Navbar from './Navbar'
import Header from './Header/Header'
import Sidebar from './Sidebar'
import MainContent from './MainContent/MainContent'

const Homepage = () => {
    return (
        <div className='flex flex-col '>
            <Navbar />
            <div className='xl:mt-[18px] lg:mt-[15px] mt-[12px] '>
                <Header />
            </div>
            <div className="flex  justify-start flex-grow  bg-main mt-[10px] pb-[28px] md:pl-[63px] pl-[20px] pt-[49px] lg:gap-[45px] md:gap-[27px] gap-[20px] ">
                <Sidebar />
                <MainContent />
            </div>
        </div>
    )
}

export default Homepage
