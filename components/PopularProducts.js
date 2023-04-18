import Link from "next/link"
import { useState } from "react"
import PopularProductCard from "./PopularProductCard"
import Data from "./ProductData"
import QuickView from "./QuickView"

const PopularProducts = () => {

  const [producDetails,setProductDetails] = useState(false)
  const handleProduct = () => {
    setProductDetails(true)
  }

  const productCross = () => {
    setProductDetails(false)
  }
  

  return (
    <div>
        <div className="grid grid-cols-2 mb-20">
          <div className="flex">
              <div className="w-0.5 h-10 bg-red-600"></div>
              <h1 className="ml-2 font-bold text-3xl text-slate-900">Popular Products</h1>
          </div>
          <div>
              <ul className="flex p-2 ml-4 text-meduim font-medium text-gray-500 justify-end mr-10">
                <div>
                  <li className="ml-6">Top Rated</li>
                  <div className="w-20 h-0.5 bg-red-600 ml-5 mt-2"></div>
                </div>
                <div>
                  <li className="ml-6">Best Selling</li>
                  <div className="w-20 h-0.5 bg-red-600 ml-7 mt-2"></div>
                </div>
                <div>
                  <li className="ml-6">Latest Product</li>
                  <div className="w-28 h-0.5 bg-red-600 ml-6 mt-2"></div>
                </div>
              </ul>
          </div>
        </div>
        <div className="grid grid-cols-4">
        {
          Data.map(d => {
 
            return(
              <PopularProductCard
                Img={d.img}
                Title={d.title}
                Price={d.price}
                Id={d.id}
                ProductDetails={handleProduct}
              />
            )
          })
        }
        </div>
        <div> 
          <button className="w-56 h-10 font-bold bg-rose-600 text-white mb-10 hover:first-letter:text-red-500 hover:bg-black">
            <Link href='/shop'>
            View All Products
            </Link>
          </button>
          <div className="">
          {
            producDetails ? (<QuickView ProductCross={productCross} />) : ''
          }
          </div>
        </div>
    </div>
  )
}

export default PopularProducts