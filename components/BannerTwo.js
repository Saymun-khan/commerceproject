import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Profile from '../img/pro.jpg'
import BannerTwoFooter from "./BannerTwoFooter"

const BannerTwo = () => {
  return (
    <div>
        <div className="grid grid-cols-2 bg-slate-100 bgImg" > 
            <div className="mt-20 ml-24 mb-10">

                <h1 className="text-xl font-semibold text-gray-500">Apple iPhone 12 Pro</h1>

                <h1 className="text-5xl font-bold mt-4 mb-4">The wait is on : iphone <br></br>12 max pro</h1>

                <h1  className="text-xl font-semibold text-gray-500">Last call for up to 
                <span className="text-black font-bold text-2xl">32%</span>
                 off</h1>

                <button className="w-28 h-10 mt-4 mb-10 bg-slate-50">Buy Now <FontAwesomeIcon icon={faArrowDown} /></button>
            </div>
            <div>
                <Image
                    src={Profile} 
                    width={300}
                    height={300}
                    className="ml-10 mt-10 justify-end"
                />
            </div>
        </div>
        <div className="grid grid-cols-4">
            <BannerTwoFooter 
                Title='Refund'
                Details='With is 30 days for an'
             />
            <BannerTwoFooter 
                Title='Support'
                Details='24 hours a day,7 days a week'
             /><BannerTwoFooter 
                Title='Payment'
                Details='Pay with multiple credit cards'
             /><BannerTwoFooter 
                Title='Free Shipping'
                Details='Free Shipping for orders'
             />
        </div>
    </div>
  )
}

export default BannerTwo