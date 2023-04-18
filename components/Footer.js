import { faCartPlus, faFaceMehBlank, faLayerGroup, faLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
  return (
    <div>
        <div className="mt-20 p-10 bg-white grid grid-cols-5 gap-x-20">
            <div>
                <h1 className="text-3xl font-bold pt-2">Harri Shop</h1>
                <h1 className="mt-4 font-semibold text-gray-600">
                    The home and elements<br></br>
                    needed to create beautiful<br></br>
                    products.
                </h1>
                <div className='-ml-9 mt-4'>
                    <ul className='flex'>
                        <li className='ml-8 text-xl'><FontAwesomeIcon icon={faCartPlus} /></li>
                        <li className='ml-8 text-xl'>
                            <FontAwesomeIcon icon={faFaceMehBlank} />
                        </li>
                        <li className='ml-8 text-xl'>
                            <FontAwesomeIcon icon={faLayerGroup} />
                        </li>
                        <li className='ml-8 text-xl'>
                            <FontAwesomeIcon icon={faLink} />
                        </li>
                    </ul>
            </div>
            </div>
            <div>
                <h1 className="text-xl font-bold mb-6">Company</h1>
                <ul>
                    <li className="font-medium text-gray-600">About us</li>
                    <li className="font-medium text-gray-600">Careers</li>
                    <li className="font-medium text-gray-600">Store Locations</li>
                    <li className="font-medium text-gray-600">Our Blog</li>
                    <li className="font-medium text-gray-600">Reviews</li>
                </ul>
            </div>
            <div>
                <h1 className="text-xl font-bold mb-6">Company</h1>
                <ul>
                    <li className="font-medium text-gray-600">About us</li>
                    <li className="font-medium text-gray-600">Careers</li>
                    <li className="font-medium text-gray-600">Store Locations</li>
                    <li className="font-medium text-gray-600">Our Blog</li>
                    <li className="font-medium text-gray-600">Reviews</li>
                </ul>
            </div>
            <div>
                <h1 className="text-xl font-bold mb-6">Company</h1>
                <ul>
                    <li className="font-medium text-gray-600">About us</li>
                    <li className="font-medium text-gray-600">Careers</li>
                    <li className="font-medium text-gray-600">Store Locations</li>
                    <li className="font-medium text-gray-600">Our Blog</li>
                    <li className="font-medium text-gray-600">Reviews</li>
                </ul>
            </div>
            <div>
                <h1 className="text-xl font-bold mb-6">Company</h1>
                <ul>
                    <li className="font-medium text-gray-600">About us</li>
                    <li className="font-medium text-gray-600">Careers</li>
                    <li className="font-medium text-gray-600">Store Locations</li>
                    <li className="font-medium text-gray-600">Our Blog</li>
                    <li className="font-medium text-gray-600">Reviews</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer