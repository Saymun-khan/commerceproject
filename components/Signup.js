import { Formik } from 'formik';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import * as Yup from 'yup';
import { Input } from './ContactForm';


const Signup = () => {
  return (
    <div>
        <div>
            welcome 
        </div>
        <div className='p-20 max-sm:p-1 max-sm:max-w-sm max-sm:mx-auto'>
    <div className="p-10 bg-white w-1/2 ml-64 max-sm:ml-0 max-sm:w-11/12">
    <div className="ml-10 max-sm:ml-0">
        <h1 className="mb-3 text-3xl font-semibold mt-4 text-center max-sm:mt-24">Register Now</h1>
        <h1 className="mb-6 text-gray-400 font-semibold text-center">You can sign up with your social account below</h1>
       <Formik 

        initialValues={{
          name:'',
          email:'',
          password:'',
          confirmPassword:''
        }}

        validationSchema={Yup.object({
          name:Yup.string().required('Name can not be empty'),
          email:Yup.string().email('Invalid email address').required('Email is required field'),
          password:Yup.string().required('Password cannot be empty'),
          confirmPassword:Yup.string().required('Confirm your password first')
        })}

        onSubmit={(values,{setSubmitting}) => {
          setTimeout(() => {
            alert(JSON.stringify(values,null,2))
            setSubmitting(false)
          },400)
        }}
       >
        {formik => (
          <form className="" onSubmit={formik.handleSubmit}>
              
              <div className="">
                  <div className='m-6 max-sm:my-2 max-sm:w-56'>
                      
                      <Input Placeholder='Enter your email' Name='email' Type='email' />
                  </div>
                  <div className='m-6 max-sm:my-2 max-sm:w-56'>
                      <Input Placeholder='Enter your name' Name='name' Type='text' />
                  </div>
                  <div className='m-6 max-sm:my-2 max-sm:w-56'>
                      <Input Placeholder='Enter your password' Name='password' Type='password' />
                  </div>
                  <div className='m-6 max-sm:my-2 max-sm:w-56'>
                      <Input Placeholder='Enter your confirm password' Name='confirmPassword' Type='password' />
                  </div>
              </div>

              <motion.button whileHover={{scale:1.1,opacity:0.7}} className="w-10/12 mt-10 ml-4 h-12 hover:bg-black font-bold bg-rose-500 text-slate-100 max-sm:mt-6 max-sm:ml-8" type="submit">Send Message</motion.button>
              <h1 className='text-slate-500 text-center mt-4 mb-4'>Already have an account?<span className='text-rose-500'>
                <Link href='/account'>
                    Login
                </Link>
              </span></h1>
          </form>
        )}
       </Formik>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Signup