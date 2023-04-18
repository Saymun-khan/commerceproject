import { faEye, faHeartCirclePlus, faLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { useAppDispatch } from '../src/hooks'
import { addToCart, addToWhishlist } from '../src/redux/cartSlice'
import Popup from "./Popup"


const PopularProductCard = ({Img,Title,Price,Id,ProductDetails}) => {
    //state
    const [showButton,setShowButton] = useState(false)
    const [isAdd,setIsAdd] = useState(false)
    const [isAddWhishlist,setIsAddWhishlist] = useState(true)
    const [isPopUp,setIsPopUP] = useState(false)
    const [progressValue,setProgressValue] = useState(0)

    //redux
    const dispatch = useAppDispatch()

    //function
    const handleAddToCart  = () => {
      setIsAdd(true)
      if(!isAdd) {
        dispatch(addToCart())
      }
    }

    const handleAddToWhishlist = () => {
      dispatch(addToWhishlist(isAddWhishlist))
      setIsAddWhishlist(isAddWhishlist => !isAddWhishlist)

      //handle popup
      setIsPopUP(true)
      setProgressValue(100)
      setTimeout(() => {
        setIsPopUP(false)
        setProgressValue(0)
      },3000)
    }






  return (
    <div> 
        
        <Popup isPopUp={isPopUp} ProgressValue={progressValue} />
        <div className="mb-20 ml-2" key={Id} >
          <div onMouseEnter={() => setShowButton(true)} onMouseLeave={() => setShowButton(false)}>
            <div 
              className="w-72 h-72 p-10 bg-slate-300 relative">
              <Image 
                src={Img}
                width={200}
                height={200}
                className="absolute mt-0 ml-0"
              />
              <div>
                {showButton && (<motion.ul
                
                animate={{
                  scale:[1,1.2,1]
                }} className="ml-52">
                  <motion.li 
                    whileHover={{scale:1.1}} 
                    whileTap={{scale:0.9}} 
                    className="w-8 h-8 mt-2 bg-slate-100 hover:bg-pink-600"
                  >
                    <FontAwesomeIcon 
                      onClick={handleAddToWhishlist}
                      icon={faHeartCirclePlus} 
                      className="text-xl cursor-pointer hover:text-white text-black p-1 ml-0.5 " 
                    />
                  </motion.li>
                  <motion.li 
                    whileHover={{scale:1.1}} 
                    whileTap={{scale:0.9}} 
                    className="w-8 h-8 mt-2 bg-slate-100 hover:bg-pink-600"
                  >
                    <FontAwesomeIcon 
                      onClick={() => ProductDetails()}
                      icon={faEye} 
                      className="text-xl cursor-pointer hover:text-white text-black p-1 ml-0.5 " 
                    />
                  </motion.li>
                  <motion.li 
                    whileHover={{scale:1.1}} 
                    whileTap={{scale:0.9}} 
                    className="w-8 h-8 mt-2 bg-slate-100 hover:bg-pink-600"
                  >
                    <FontAwesomeIcon 
                      icon={faLink} 
                      className="text-xl cursor-pointer hover:text-white text-black p-1 ml-0.5 " 
                    />
                  </motion.li>
                </motion.ul>)}
              </div>
             <div>
             {
                showButton && (<motion.button animate={{
                  scale: [1, 1.1, 1]
                }} className={` ${isAdd ? 'bg-rose-600' : 'bg-black'} text-white w-72 h-8 mt-24 -ml-10 hover:bg-rose-600`} onClick={handleAddToCart}>{isAdd ? 'View To Cart' : 'Add To Cart'}</motion.button>)
              }
             </div>
             
            </div>
            <h1 className="font-medium text-gray-700 mt-4">{Title}</h1>
            <h1 className="font-medium text-black-700 mt-1">{Price}</h1>
            
          </div>
        </div>
    </div>
  )
}

export default PopularProductCard