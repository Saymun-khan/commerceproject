import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PopularProductCard from "./PopularProductCard"
import Data from "./ProductData"
import ShopBrand from "./ShopBrand"
import ShopSlideToggle from "./ShopSlideToggle"

const ShopBar = () => {

  return (
    <div className="bg-white">
        <div className="p-10">

            {
                //shop filtering bar
            }
            <div className="w-11/12 h-20 border-2 border-slate-400 p-4">
                <div className="grid grid-cols-2">
                    <div>
                        <h1 className="text-xl font-extralight">Showing 1-9 of 27 results</h1>
                    </div>
                    <div className="ml-56">
                        <div>
                            <FontAwesomeIcon className="ml-6 mr-6 text-xl" icon={faToggleOn} />
                            <FontAwesomeIcon className="text-xl" icon={faToggleOff} />
                        </div>
                        <div>
                            
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                            <select class="ml-40 -mt-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Short Filtering</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>

                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>

            {
                //shop toggle bar
            }
           <div className="flex">
           <div className="mr-6">
                <ShopSlideToggle 
                    Title='Planer And Virtual' 
                    OptionOne='Planer' 
                    OptionTwo='Virtual' 
                />
                 <ShopSlideToggle 
                    Title='Spinning Reel And Kettle' 
                    OptionOne='Spinning Reel' 
                    OptionTwo='Kettle' 
                />
                <ShopSlideToggle 
                    Title='Planer And Virtual' 
                    OptionOne='Planer' 
                    OptionTwo='Virtual' 
                />
                 <ShopSlideToggle 
                    Title='Spinning Reel And Kettle' 
                    OptionOne='Spinning Reel' 
                    OptionTwo='Kettle' 
                />
                <ShopSlideToggle 
                    Title='Planer And Virtual' 
                    OptionOne='Planer' 
                    OptionTwo='Virtual' 
                />
                 <ShopSlideToggle 
                    Title='Spinning Reel And Kettle' 
                    OptionOne='Spinning Reel' 
                    OptionTwo='Kettle' 
                />
                <ShopSlideToggle 
                    Title='Planer And Virtual' 
                    OptionOne='Planer' 
                    OptionTwo='Virtual' 
                />
                 <ShopBrand />
                 <ShopBrand />
                 <ShopBrand />
                 <button className="w-72 mt-10 text-white font-semibold h-10 bg-pink-400">Reset Filter</button>
           </div>
           <div className="grid grid-cols-3 mt-10">
            {
                Data.map((d) => {
                    return(
                        <PopularProductCard 
                            Img={d.img} 
                            Title={d.title} 
                            Price={d.price} 
                        />
                    )
                })
            }
           </div> 
           </div>
        </div>
        
    </div>
  )
}

export default ShopBar