import { faCar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const BannerTwoFooter = ({Title,Details}) => {
  return (
    <div>
        <div>
            <div className="flex mt-20 mb-10">
                <div className="w-14 h-14 rounded-full p-3 bg-slate-50 mr-4 border-2 border-slate-400">
                    <FontAwesomeIcon className="text-2xl text-gray-600" icon={faCar} />
                </div>
                <div>
                    <h1 className="text-2xl font-semibold">{Title}</h1>
                    <h1 className="text-gray-500 font-extralight mb-10">{Details}<br></br>over $120 </h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BannerTwoFooter