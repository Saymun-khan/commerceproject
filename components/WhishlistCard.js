import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../src/hooks';
import { removeProductId, removeToCart } from '../src/redux/cartSlice';
import ProductData from './ProductData';


const WhishlistCard = () => {
  const {productId} = useAppSelector((state) => state.cart)




  var product = []

  const findProductById = (productId) => {
    return ProductData.find((product) => product.id === productId)
    
  }

  const item = []

  productId.forEach((productId) => {
    const product = findProductById(productId)
    item.push(product)
    })

  return (
    <div className='max-sm:overflow-x-scroll'>
      <table className="w-full ml-10 mt-10">
      <TableHead />
           {
            
            item.map((d) => {
              return(
                <TableData Id={d.id} Price={d.price} Title={d.title} Images={d.img} />
                
              )
            })
           }
        
      </table>
  </div>


  );
};

export default WhishlistCard;

export const TableHead = () => {
  return(
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
  )
}

export const TableData = ({Images,Id,Title,Price,Quantity}) => {
    //state handler
    let [quantity,setQuantity] = useState(1)
    const dispath = useAppDispatch()
      //handle function
      const increment = () => {
        setQuantity(quantity++)
      }
  
      const decrement = () => {
        setQuantity(quantity--)
      }

      //remove product from array
      const removeProduct = () => {
        dispath(removeProductId(Id))
        dispath(removeToCart())
      }

      
  return (
    <tbody>
      <tr key={Id}>
            <td className="py-3 px-4 border">
              <Image src={Images} w={100} height={100} />
            </td>
            <td className="py-3 px-4 border">
              {Title}
            </td>
            <td className="py-3 px-4 border">{`$${Price}`}</td>
            <td className="py-3 px-4 border">
              <div className="w-28 h-10 p-2 border-2 border-gray-300">
                <button className="h-6 border-r-2 border-r-indigo-200 mr-2 pr-2">
                  <FontAwesomeIcon icon={faMinus} onClick={decrement} />
                </button>
                <button className="h-6 border-r-2 border-r-indigo-200 mr-2 pr-2">
                 {quantity}
                </button>
                <button className="h-6">
                  <FontAwesomeIcon icon={faPlus} onClick={increment} />
                </button>
              </div>
            </td>
            <td className="py-3 px-4 border">{`$${Price * quantity}`}</td>
            <td className="py-3 px-4 border">
              <button className="text-red-500 ml-4 hover:text-red-700" onClick={removeProduct}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </td>
          </tr>
    </tbody>
  )
}
