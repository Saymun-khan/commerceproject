import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const OurWhishlist = ({Images,Product,Price,Quantity,Total}) => {
  return (
    <div>
            <table className="mt-10">
              <table className="w-full ml-40">
                <thead>
                  <tr>
                    <th className="text-left py-3 px-4 uppercase font-bold text-gray-700">
                      Images
                    </th>
                    <th className="text-left py-3 px-4 uppercase font-bold text-gray-700">
                      Product
                    </th>
                    <th className="text-left py-3 px-4 uppercase font-bold text-gray-700">
                      Unit Price
                    </th>
                    <th className="text-left py-3 px-4 uppercase font-bold text-gray-700">
                      Quantity
                    </th>
                    <th className="text-left py-3 px-4 uppercase font-bold text-gray-700">
                      Total
                    </th>
                    <th className="text-left py-3 px-4 uppercase font-bold text-gray-700">
                      Remove
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border">
                      <Image src={Images} w={100} height={100} />
                    </td>
                    <td className="py-3 px-4 border">
                      {Product}
                    </td>
                    <td className="py-3 px-4 border">{Price}</td>
                    <td className="py-3 px-4 border">
                      <div className="w-28 h-10 p-2 border-2 border-gray-300">
                        <button className="h-6 border-r-2 border-r-indigo-200 mr-2 pr-2">
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <button className="h-6 border-r-2 border-r-indigo-200 mr-2 pr-2">
                          16
                        </button>
                        <button className="h-6">
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                    </td>
                    <td className="py-3 px-4 border">{Total}</td>
                    <td className="py-3 px-4 border">
                      <button className="text-red-500 ml-4 hover:text-red-700">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border">
                      <Image src={Images} w={100} height={100} />
                    </td>
                    <td className="py-3 px-4 border">
                      {Product}
                    </td>
                    <td className="py-3 px-4 border">{Price}</td>
                    <td className="py-3 px-4 border">
                      <div className="w-28 h-10 p-2 border-2 border-gray-300">
                        <button className="h-6 border-r-2 border-r-indigo-200 mr-2 pr-2">
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <button className="h-6 border-r-2 border-r-indigo-200 mr-2 pr-2">
                          16
                        </button>
                        <button className="h-6">
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                    </td>
                    <td className="py-3 px-4 border">{Total}</td>
                    <td className="py-3 px-4 border">
                      <button className="text-red-500 ml-4 hover:text-red-700">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </table>
          </div>
  )
}

export default OurWhishlist