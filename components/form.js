import { ErrorMessage, Field, Formik } from 'formik';
import { motion } from 'framer-motion';
import React from 'react';
import * as Yup from 'yup';



    //check validation
    /*const validate = values => {
        const errors = {}
        if(!values.firstName){
            errors.firstName = 'Required'
        }else if (values.firstName.length > 15){
            errors.firstName = 'Must be 15 characters or less'
        }

        if(!values.lastName){
            errors.lastName = 'Required'
        }else if (values.lastName.length > 25){
            errors.firstName = 'Must be 15 characters or less'
        }


        if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }

          return errors
    }*/



const Form = () => {

    

    /*const formik = useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            email:'',
        },
        validationSchema:Yup.object({
            firstName:Yup.string().max(15,'Must be 15 characters or less').required('Name is required'),
            lastName:Yup.string().max(20,'Must be 20').required('Last name is required'),
            email:Yup.string().email('Invalid email address').required('Email is required')
        }),
        onSubmit:values => {
            alert(JSON.stringify(values,null,2))
        }
    })*/

  return (
    <div className="p-10 bg-gray-100 max-sm:p-1">
    <div className="w-10/12 border-2 border-gray-400 justify-center ml-24 p-16 max-sm:ml-1 max-sm:p-2 max-sm:w-full max-sm:mr-2">
        <h1 className="mb-6 text-3xl font-semibold ml-4">Send a message</h1>
            <Formik 
                initialValues={{
                name:'',
                email:'',
                mobile:'',
                company:''
            }}

            validationSchema={Yup.object({
            name:Yup.string().required('Name is required'),
            email:Yup.string().email('Invalid email').required('Email is required'),
            mobile:Yup.string().required('Phone can not be empty'),
            company:Yup.string().required('Company name is required field')
        })}
            onSubmit={(values,{setSubmitting}) => {
            setTimeout(() => {
                alert(JSON.stringify(values,null,2))
                setSubmitting(false)
            },400)
        }}
            >

            {
                formik => (
                    <form onSubmit={formik.handleSubmit}>
                    <div className="grid grid-cols-2 p-4 gap-10 max-sm:grid-cols-1 max-sm:p-2">
                        <div>
                            <Input
                                Name="name"
                                Type="text"
                                Placeholder='Enter your name'
                            />
                            <Input 
                                Name="email" 
                                Type="email"  
                                Placeholder='Enter your email' 
                            />
                        </div>
                        <div>
                            <Input
                                Name="mobile"
                                Type="text"
                                Placeholder='Enter your mobile'
                            />
                            <Input 
                                Name="company" 
                                Type="text"  
                                Placeholder='Enter your company' 
                            />
                        </div>
                        
                    </div>
                    
      
      
                    <motion.button whileHover={{scale:1.1,opacity:0.7}} className="w-52 mt-10 ml-4 h-12 hover:bg-black font-bold bg-rose-500 text-slate-100" type="submit">Send Message</motion.button>
                </form>
                )
            }
                
 
            </Formik>
        </div>
    </div>
  )
}

export default Form



export const Input = ({Placeholder,Name,Type}) => {
    return(
        <div>
            <Field
            className="w-11/12 h-11 p-6 max-sm:w-full placeholder:text-gray-500 bg-gray-200 outline-none focu focus:border-2 focus:border-red-400 focus:bg-slate-50 mt-6"
            type={Type}
            id="name"
            name={Name}
            placeholder={Placeholder}
      />
      <ErrorMessage component="div" name={Name} className='font-semibold text-red-500' />
        </div>
    )
}