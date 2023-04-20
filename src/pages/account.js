import { motion } from 'framer-motion';
import { useState } from 'react';
import { Input } from '../../components/ContactForm';

const account = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // TODO: Handle form submission
    };
  
  return (
  <div className='p-20 max-sm:p-1 max-sm:max-w-sm max-sm:mx-auto'>
    <div className="p-10 bg-white w-1/2 ml-64 max-sm:ml-0 max-sm:w-11/12">
    <div className="ml-10 max-sm:ml-0">
        <h1 className="mb-3 text-3xl font-semibold mt-4 text-center max-sm:mt-24">Hello Again</h1>
        <h1 className="mb-6 text-gray-400 font-semibold text-center">Enter you credentials to access your account</h1>
        <form className="" onSubmit={handleSubmit}>
            
            <div className="">
                <div className='m-6 max-sm:my-2 max-sm:w-56'>
                    
                    <Input Placeholder='Enter your email' />
                </div>
                <div className='m-6 max-sm:my-2 max-sm:w-56'>
                    <Input Placeholder='Enter your email' />
                </div>
            </div>

            <motion.button whileHover={{scale:1.1,opacity:0.7}} className="w-10/12 mt-10 ml-4 h-12 hover:bg-black font-bold bg-rose-500 text-slate-100 max-sm:mt-6 max-sm:ml-8" type="submit">Send Message</motion.button>
            <h1 className='text-slate-500 text-center mt-4 mb-4'>Don't have account?<span className='text-rose-500'>Register Now</span></h1>
        </form>
    </div>
    </div>
    </div>
  )
}

export default account