import { faMessage } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ContactUsCard = () => {
  return (
    <div className="p-10">
        
        <div class="max-w-sm p-6 shadow-md shadow-slate-300 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <FontAwesomeIcon className="ml-36 mt-10 mb-6 text-7xl text-blue-400" icon={faMessage} />
            <h1 className="text-gray-400 underline cursor-pointer text-center text-xl font-semibold p-4">Contact</h1>
            <h1 className="cursor-pointer text-center text-2xl font-semibold hover:text-red-600">Location@website.com</h1>
            <h1 className="cursor-pointer text-center text-2xl font-semibold hover:text-red-600">(+088)+123456789</h1>
        </div>

    </div>
  )
}

export default ContactUsCard