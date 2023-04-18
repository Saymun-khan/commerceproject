import { faHeart, faSearch, faShoppingBasket, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Roboto } from 'next/font/google'
import Link from 'next/link'
import { useAppSelector } from '../src/hooks'


const roboto = Roboto({
    weight:'400',
    subsets:['latin']
})
const Navbar = () => {
    const {productNumber,whishlistNumber} = useAppSelector((state) => state.cart)
  return (
    <div className='flex p-4 bg-gray-200 z-40 fixed'>



        {/*left side navbar*/}
        <div className="flex ">
            <div className={roboto.className}>
                <h1 className="text-3xl font-bold pt-2">
                <Link href='/'>
                Harri Shop
                </Link>
                </h1>
            </div>
            <div className={roboto.className}>
                <ul className="flex p-2 ml-4 mt-2 text-meduim font-medium text-gray-500">
                    <li className="ml-4">
                        <Link href='/'>Home</Link>
                    </li>
                    <li className="ml-4">
                        <Link href='/about'>About Us</Link>
                    </li>
                    <li className="ml-4">
                        <Link href='/shop'>Shop</Link>
                    </li>
                    <li className="ml-4">
                        <Link href='/'>Pages</Link>
                    </li>
                    <li className="ml-4">
                        <Link href='/contact'>Contact Us</Link>
                    </li>
                </ul>
            </div>
        </div>

        {/*Right side navbar*/}
        <div className='flex ml-96 mt-4 text-medium font-semibold'>
            <div>
                <input placeholder="Search for products"  className='h-10 w-56 rounded-2xl p-4 bg-slate-50'/>
                <FontAwesomeIcon icon={faSearch} className='-ml-10 text-xl text-gray-500' />
            </div>
            <div className='ml-4'>
                <ul className='flex'>
                    <li className='ml-8 text-xl'>
                    <Link href='/account'>
                        <FontAwesomeIcon icon={faUser} style={{color: "#597373",}} />
                    </Link>
                    </li>
                    <li className='ml-8 text-xl'>
                    <Link href='/whishlist'>
                        <FontAwesomeIcon className='text-3xl relative' icon={faHeart} style={{color: "#535f74",}} />
                        <div className='w-5 h-5 absolute bg-red-500 rounded-full -mt-10 ml-4'>
                            <h1 className='text-sm p-1 -mt-1 text-white'>{whishlistNumber}</h1>
                        </div>
                    </Link>
                    </li>
                    <li className='ml-8 text-xl'>
                    <Link href='/shopingcard'>
                        <FontAwesomeIcon className='relative text-3xl' icon={faShoppingBasket} style={{color: "#525f75",}} />
                        <div className='w-5 h-5 absolute bg-red-500 rounded-full -mt-10 ml-4'>
                            <h1 className='text-sm p-1 -mt-1 text-white'>{productNumber}</h1>
                        </div>
                    </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar