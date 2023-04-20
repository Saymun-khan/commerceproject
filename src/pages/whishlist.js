import Image from "next/image"
import Link from "next/link"
import WhishlistCard from "../../components/WhishlistCard"
import EmptyImg from '../../img/empty.png'
import { useAppSelector } from "../hooks"

const whishlist = () => {
  const {whishlistNumber} = useAppSelector((state) => state.cart)
  return (
    <div>
                <div className="text-center p-10 mb-10">
                    <h1 className="text-6xl font-bold mt-20">My Wishlist</h1>
                    <h1 className="font-light uppercase p-6">Home - whishlist</h1>
                </div>
                <div className="mb-40">
                    {whishlistNumber === 0 ? (<EmptyWhishlist />) : (<WhishlistCard />)}
                </div>
    </div>
  )
}

export default whishlist

export const EmptyWhishlist = () => {
  return(
    <div className="bg-white p-40">
      <Image 
      src={EmptyImg}
      width={300}
      height={300}
      alt="this is img"
      className="justify-center m-auto"

      />
      <div className="w-40 h-28 m-auto">
      <h1 className="mt-4 font-light text-center">Your cart is empty</h1>
      <button className="w-40 h-8 bg-slate-300 hover:bg-black m-auto font-semibold mt-4 hover:text-teal-50">
        <Link href='/shop'>Go To Shop</Link>
      </button>
      </div>
    </div>
  )
}