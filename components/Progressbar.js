import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const Progressbar = ({Progress}) => {
    const [value,setValue] = useState(Progress)
    useEffect(() => {
        setValue(Progress)
    },[Progress])
  return (
    <div>
        <motion.progress 
            className='w-72 h-1 mt-1 rounded-lg bg-green-500'
            value={Progress}
            max={100}
            animate={{width:`${value}%`}}
            transition={{duration:3,ease:'easeOut'}}
        />
    </div>
  )
}

export default Progressbar