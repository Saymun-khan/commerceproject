import { faCross } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import React from 'react'
import Progressbar from './Progressbar'

const Popup = ({isPopUp,ProgressValue}) => {
  return (
    <motion.div animate={{x:[0,100,0],opacity:[0.2,0.4,0.6,0.9],onDurationChange:0.5}} transition={{ease:'easeOut',duration:2}} className={`fixed w-full h-full top-0 left-0 z-50 justify-center items-center flex ${isPopUp ? 'visible' : 'hidden'} -mt-80`}>
        <div className='w-74 h-18 rounded-md shadow-sm shadow-slate-100 bg-slate-50'>
            <div className='flex p-2'>
                <div>
                    <div className='h-6 w-6 bg-green-500 rounded-full mr-2 mt-3'></div>
                </div>
                <div>
                    <h1 className='font-light text-gray-700 text-sm mt-2'>ViewSonic Professional Monitor Added<br></br>to wishlist</h1>
                </div>
                <div className='ml-2 mt-2'>
                    <FontAwesomeIcon icon={faCross} />
                </div>
            </div>
            <div>
                <Progressbar Progress={ProgressValue} />
            </div>
        </div>
        
    </motion.div>
  )
}

export default Popup