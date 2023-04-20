import { fa6, faCross, faHeartCirclePlus, faLink, faMinus, faPlus, faSortNumericUpAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import IphonOne from '../img/iphoneone.png'

const QuickView = ({ProductCross}) => {
  return (
    <div className='w-10/12 h-screen shadow-lg shadow-slate-500 p-10 fixed z-50 top-0 left-0 bg-white mt-2 ml-36 mb-20 inset-0 flex max-sm:max-w-sm max-sm:mx-auto max-sm:overflow-y-scroll'>
        <div className='grid grid-cols-2 gap-20 max-sm:grid-cols-1'>
            <div>
                <div>   
                    <div className='w-1/2  bg-gray-100 max-sm:w-11/12'>
                        <Image 
                            src={IphonOne}
                            width={300}
                            height={300}
                            
                        />
                    </div>
                </div>
                <div className='grid grid-cols-4 max-sm:grid-cols-2'>
                    <div className='mt-40 w-36 h-36 items-center p-5 border-2 border-red-400 max-sm:mt-20 max-sm:w-24 max-sm:h-24'>
                        <Image 
                            src={IphonOne}
                            width={110}
                            height={110}
                                
                        />
                    </div>
                    <div className='mt-40 w-36 h-36 items-center p-5 border-2 border-red-400 max-sm:mt-20 max-sm:w-24 max-sm:h-24'>
                        <Image 
                            src={IphonOne}
                            width={110}
                            height={110}
                                
                        />
                    </div>
                    <div className='mt-40 w-36 h-36 items-center p-5 border-2 border-red-400 max-sm:mt-20 max-sm:w-24 max-sm:h-24'>
                        <Image 
                            src={IphonOne}
                            width={110}
                            height={110}
                                
                        />
                    </div>
                    <div className='mt-40 w-36 h-36 items-center p-5 border-2 border-red-400 max-sm:mt-20 max-sm:w-24 max-sm:h-24 max-sm:p-2'>
                        <Image 
                            src={IphonOne}
                            width={110}
                            height={110}
                                
                        />
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <button className='ml-96'>
                        <FontAwesomeIcon onClick={() => ProductCross()} icon={faCross} />
                    </button>
                    <h1 className='text-4xl font-semibold mt-40 mb-6 max-sm:mt-4'>ViewSonic Professional Monitor</h1>
                    <h1 className='font-light'>Shop Harry.com for every day low prices. 
                    Free shipping on orders $35+ or Pickup In-store and get</h1>
                    <h1 className='mt-4'>$290.00 <span>$281.09</span></h1>
                    <div className='w-36 h-10 border-2 border-gray-500 mt-6'>
                        <button>
                            <FontAwesomeIcon className='text-2xl ml-2 p-2 border-r-2 border-slate-500 mr-2 h-3 mt-1' icon={faMinus} />
                        </button>
                        <button>
                            <FontAwesomeIcon className='text-2xl ml-2 p-2 border-r-2 border-slate-500 mr-2 h-3 mt-1' icon={fa6} />
                        </button>
                        <button>
                            <FontAwesomeIcon className='text-2xl ml-2 p-2  mr-2 h-3 mt-1' icon={faPlus} />
                        </button>
                    </div>
                    <div className='flex ml-10'>
                        <motion.button className=' text-white w-72 h-8 mt-16 -ml-10 hover:bg-rose-600 bg-black'>Add To Cart</motion.button>
                        <div>
              <motion.ul 
                
                animate={{
                  scale:[1,1.2,1]
                }} className="ml-10 flex  mt-14">
                  <motion.li 
                    whileHover={{scale:1.1}} 
                    whileTap={{scale:0.9}} 
                    className="w-8 h-8 mt-2 bg-pink-600 hover:bg-slate-600"
                  >
                    <FontAwesomeIcon 
                      icon={faHeartCirclePlus} 
                      className="text-xl cursor-pointer hover:text-rose-300 text-white p-1 mr-10 " 
                    />
                  </motion.li>
                  
                  <motion.li 
                    whileHover={{scale:1.1}} 
                    whileTap={{scale:0.9}} 
                    className="w-8 h-8 mt-2 bg-pink-600 hover:bg-pink-600 ml-4"
                  >
                    <FontAwesomeIcon 
                      icon={faLink} 
                      className="text-xl cursor-pointer hover:text-white text-black p-1 ml-0.5 " 
                    />
                  </motion.li>
                </motion.ul>
              </div>
                    </div>
                    <div className='border bottom-1 border-emerald-200 mt-10 mb-10'></div>
                    <div>
                        <div>
                            <ul>
                                <li>
                                <span className='text-xl uppercase font-bold mt-4'>sku</span>
                                <span className='font-extralight ml-4 text-lg -mt-1 text-gray-600'>29045-SB-6</span></li>
                                <li>
                                <span className='text-xl  font-bold mt-4 mb-2'>Categories</span>
                                <span className='font-extralight ml-4 text-lg -mt-1 hover:text-rose-500'>iPhone Cases,Android Cases,Accessories</span></li>
                                <li>
                                <span className='text-lg  font-smibold mt-10'>Tags</span>
                                <span className='font-extralight ml-4 text-lg -mt-1'>
                                    <button className=' border-2 border-gray-300 text-gray-400 text-sm p-1 mr-1'>ViewSonic</button>
                                    <button className=' border-2 border-gray-300 text-gray-400 text-sm p-1 mr-1'>ViewSonic</button>
                                    <button className=' border-2 border-gray-300 text-gray-400 text-sm p-1'>ViewSonic</button>
                                </span></li>
                                <li>
                                <span className='text-lg  font-smibold mt-10'>Share:</span>
                                <span className='ml-3'>
                                    <FontAwesomeIcon className='text-gray-500 font-semibold ' icon={faSortNumericUpAlt} />
                                </span>
                                <span className='ml-3'>
                                    <FontAwesomeIcon className='text-gray-500 font-semibold ' icon={faSortNumericUpAlt} />
                                </span>
                                <span className='ml-3'>
                                    <FontAwesomeIcon className='text-gray-500 font-semibold ' icon={faSortNumericUpAlt} />
                                </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default QuickView