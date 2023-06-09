import { faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ContactLocation = () => {
  return (
    <div>
        <div className="p-16 bg-slate-50 max-sm:p-2 max-sm:mt-10">
        
            <div className="grid grid-cols-3 max-sm:grid-cols-1">
                <div>
                    <h1 className="text-xl font-bold ml-10 max-sm:ml-1 mb-4">Australia Office</h1>
                </div>
                <div className="flex">
                    <div>
                        <FontAwesomeIcon className="text-3xl mr-4 text-gray-400 " icon={faHome} />
                    </div>
                    <div className="-mt-2">
                        <h1>contact.location@website.com</h1>
                        <h1>689-564-5621</h1>
                    </div>
                </div>
                <div>
                    <button className="w-40 h-10 border-2 border-gray-400 ml-40 max-sm:mt-4 hover:bg-rose-600 hover:text-teal-100">View Location</button>
                </div>
            </div>
            <div className="h-0.5 w-11/12 bg-gray-100 mt-6 ml-6"></div>
        </div>
    </div>
  )
}

export default ContactLocation