import { ErrorMessage, Field, Formik } from 'formik';
import { motion } from 'framer-motion';
import * as Yup from 'yup';

const ContactForm = () => {
  //validation schema with yup

  return (
    <div className="p-10 bg-gray-100 max-sm:p-1">
    <div className="w-10/12 border-2 border-gray-400 justify-center ml-24 p-16 max-sm:ml-1 max-sm:p-2 max-sm:w-full max-sm:mr-2">
        <h1 className="mb-6 text-3xl font-semibold ml-4">Send a message</h1>
        <Formik 
            initialValues={{
                name:'',
                email:'',
                company:'',
                mobile:'',
                message:'',
            }}

            validationSchema={Yup.object({
            name:Yup.string().required('Name is required'),
            email:Yup.string().email('Invalid email').required('Email is required'),
            company:Yup.string(),
            mobile:Yup.string(),
            message:Yup.string().required('Message is required')
        })}
            onSubmit={(values,{setSubmitting}) => {
            setTimeout(() => {
                alert(JSON.stringify(values,null,2))
                setSubmitting(false)
            },400)
        }}
        >
            {formik => (
                <form onSubmit={formik.handleSubmit}>
                
                <div className="grid grid-cols-2 p-4 gap-10 max-sm:grid-cols-1 max-sm:p-2">
                    <div>
                        <Field placeholder='Enter your name' type='text' name='name' />
                        <ErrorMessage name='name' />
                    </div>
                   <div>
                        <Field placeholder='Enter your email' type='emial' name='email' />
                        <ErrorMessage name='email' />
                   </div>
                </div>
               {/* <div className="grid grid-cols-2 p-4 gap-10 max-sm:grid-cols-1 max-sm:p-2 max-sm:mt-6">
                    <Input Placeholder='Mobile no' Type='text' Name='mobile' />
                    <ErrorMessage name='mobile' />
                    <Input Placeholder='Company' Type='text' Name='company' />
                    <ErrorMessage name='company' />
                </div>*/}
                {/*<Field
                    component='textarea' 
                    name='message'
                    id="message"
                    className="w-11/12 h-40 p-6 placeholder:text-gray-500 grid grid-cols-1 ml-4 resize-none mt-10 bg-gray-200 outline-none"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />*/}
                <motion.button whileHover={{scale:1.1,opacity:0.7}} className="w-52 mt-10 ml-4 h-12 hover:bg-black font-bold bg-rose-500 text-slate-100" type="submit">Send Message</motion.button>
                

                
            </form>
            )}
            
        </Formik>
        
    </div>
    </div>
  );
};

export default ContactForm;

export const Input = ({Placeholder,Name,Type}) => {
    return(
        <div>
            <Field
            className="w-11/12 h-11 p-6 max-sm:w-full placeholder:text-gray-500 bg-gray-200 outline-none focu focus:border-2 focus:border-red-400 focus:bg-slate-50"
            type={Type}
            id="name"
            name={Name}
            placeholder={Placeholder}
      />
        </div>
    )
}
