import Navbar from './Navbar'
import Header from './Header/Header'
import Sidebar from './Sidebar'
import MainContent from './MainContent/MainContent'

const Homepage = () => {
    return (
        <div className='flex flex-col '>
            <Navbar />
            <div className='mt-[18px]'>
                <Header />
            </div>
            <div className="flex justify-start flex-grow  bg-main mt-[10px] pb-[28px] pl-[63px] pt-[49px] gap-[45px]  ">
                <Sidebar/>
                <MainContent/>
            </div>
        </div>
    )
}

export default Homepage
