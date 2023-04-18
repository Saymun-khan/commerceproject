import { motion } from 'framer-motion';
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission
  };

  return (
    <div className="p-10 bg-gray-100">
    <div className="w-10/12 border-2 border-gray-400 justify-center ml-24 p-16">
        <h1 className="mb-6 text-3xl font-semibold ml-4">Send a message</h1>
        <form className="" onSubmit={handleSubmit}>
            
            <div className="grid grid-cols-2 p-4 gap-10">
                <Input Placeholder='Enter your name' />
                <Input Placeholder='Enter your email' />
            </div>
            <div className="grid grid-cols-2 p-4 gap-10">
                <Input Placeholder='Mobile no' />
                <Input Placeholder='Company' />
            </div>
            <textarea
                id="message"
                className="w-11/12 h-40 p-6 placeholder:text-gray-500 grid grid-cols-1 ml-4 resize-none mt-10 bg-gray-200 outline-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <motion.button whileHover={{scale:1.1,opacity:0.7}} className="w-52 mt-10 ml-4 h-12 hover:bg-black font-bold bg-rose-500 text-slate-100" type="submit">Send Message</motion.button>
        </form>
    </div>
    </div>
  );
};

export default ContactForm;

export const Input = ({Placeholder}) => {
    return(
        <div>
            <input
            className="w-11/12 h-11 p-6 placeholder:text-gray-500 bg-gray-200 outline-none focu focus:border-2 focus:border-red-400 focus:bg-slate-50"
            type="text"
            id="name"
            placeholder={Placeholder}
            onChange={(e) => setName(e.target.value)}
      />
        </div>
    )
}
