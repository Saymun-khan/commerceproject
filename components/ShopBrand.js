import { faArrowDown, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

const ShopBrand = () => {
    const [show,setShow] = useState(false)
  return (
    <div>
        <div className="mt-6"> 
            <button onClick={() => setShow(!show)} className="flex">
                <h1 className="text-xl font-semibold mr-2">Brands</h1>
                <FontAwesomeIcon className="ml-72" icon={faArrowDown} />
            </button>
            <div className="h-0.5 w-72 bg-slate-300 mt-4"></div>
            {
                show && (
                    <div>
                <div className="mt-6">
                    <input placeholder="Search for products"  className='h-10 w-72 p-4 bg-slate-200'/>
                    <FontAwesomeIcon icon={faSearch} className='-ml-10 text-xl text-gray-500' />
                </div>
                <div className="h-64 w-72 overflow-y-scroll overflow-x-hidden "> 
                    <ul class="w-72 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <List Brand='TECLAST' />
                        <List Brand='APPLE' />
                        <List Brand='AISUO' />
                        <List Brand='POLAROID' />
                        <List Brand='ZUMIMALL' />
                        <List Brand='VIEWSONIC' />
                        <List Brand='XIOMI' />
                        <List Brand='TECLAST' />
                        <List Brand='APPLE' />
                        <List Brand='AISUO' />
                        <List Brand='POLAROID' />
                        <List Brand='ZUMIMALL' />
                        <List Brand='VIEWSONIC' />
                        <List Brand='XIOMI' />

                    </ul>

                </div>
            </div>
                )
            }
        </div>
    </div>
  )
}

export default ShopBrand

const List = ({Brand}) => {
    return (
        <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
            <label for="vue-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{Brand}</label>
        </div>
    </li>
    )
}