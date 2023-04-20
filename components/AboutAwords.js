import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const AboutAwords = () => {
  return (
    <div>
        <div className="bg-slate-100  p-16 max-sm:p-4">
            <h1 className="text-5xl font-semibold text-center mt-20 max-w-sm mx-auto">Our Awards</h1>
            <hr className="mt-10"></hr>
            <div className="grid grid-cols-3 mt-10 max-sm:grid-cols-1 max-sm:mt-6">
                <div>
                    <h1 className="text-2xl font-light max-sm:mb-4">FREE SHIPPING</h1>
                </div>
                <div>
                    <h1 className="text-2xl font-semibold max-sm:font-extrabold">Modern painting award jump</h1>
                    <h1 className="font-slate-300">Runner Up - "Decor of the week"</h1>
                </div>
                <div>
                    <FontAwesomeIcon icon={faArrowDown} className="ml-72 text-2xl mt-6 max-sm:ml-2 max-sm:mt-10" />
                </div>
            </div>
            <hr className="mt-10"></hr>
            <div className="grid grid-cols-3 mt-10 max-sm:grid-cols-1 max-sm:mt-6">
                <div>
                    <h1 className="text-2xl font-light max-sm:mb-4">FREE SHIPPING</h1>
                </div>
                <div>
                    <h1 className="text-2xl font-semibold max-sm:font-extrabold">Modern painting award jump</h1>
                    <h1 className="font-slate-300">Runner Up - "Decor of the week"</h1>
                </div>
                <div>
                    <FontAwesomeIcon icon={faArrowDown} className="ml-72 text-2xl mt-6 max-sm:ml-2 max-sm:mt-10" />
                </div>
            </div>
            <hr className="mt-10"></hr>
            <div className="grid grid-cols-3 mt-10 max-sm:grid-cols-1 max-sm:mt-6">
                <div>
                    <h1 className="text-2xl font-light max-sm:mb-4">FREE SHIPPING</h1>
                </div>
                <div>
                    <h1 className="text-2xl font-semibold max-sm:font-extrabold">Modern painting award jump</h1>
                    <h1 className="font-slate-300">Runner Up - "Decor of the week"</h1>
                </div>
                <div>
                    <FontAwesomeIcon icon={faArrowDown} className="ml-72 text-2xl mt-6 max-sm:ml-2 max-sm:mt-10" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutAwords