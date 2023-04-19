import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { easeInOut, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import BannerOne from '../img/BannerOnePic.png'

const Banner = () => {
  return (
    <div className="grid grid-cols-2 max-sm:block overflow-hidden mb-40 max-sm:mb-10 max-sm:-ml-20" style={{height:'600px'}}>
    <motion.div animate={{x:100,opacity:0.7}} transition={{
        ease:"linear",
        duration:2,
        delay:0.2,
        x:{duration:1}
    }} className="mt-40">
        <div className="flex">
            <div className="w-0.5 h-10 bg-red-600"></div>
            <h1 className="ml-2 font-medium text-gray-500 -mt-1">Best Ear<br></br> Headphones</h1>
        </div>
        <h1 className="text-7xl font-semibold mt-4 mb-4">Music To <br></br> Fill Your Heart</h1>
        <Link href='/shop'>
        <button className="w-40 mt-20 h-10 border-4 border-black text-gray-900 font-semibold mb-40 hover:bg-black hover:text-white">Shop Now <FontAwesomeIcon icon={faArrowDown} /></button>
        </Link>
    </motion.div>
    <div>
    <motion.div initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 ,repeatCount:Infinity }}
      transition={{
        duration:0.3,
        ease:easeInOut,
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}>
        <Image
            src={BannerOne} 
            alt="Picture" 
            width={600}
            height={600} 
            className="mt-10 ml-20 max-sm:ml-2 rounded-full overflow-hidden"
        />
    </motion.div>
    </div>
</div>
  )
}

export default Banner