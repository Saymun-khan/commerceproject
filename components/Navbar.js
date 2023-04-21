import { faCross, faHeart, faSearch, faShoppingBasket, faToggleOn, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Roboto } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'
import Toggle from '../components/Toggle'
import { useAppDispatch, useAppSelector } from '../src/hooks'
import { toggleChange } from '../src/redux/cartSlice'

const roboto = Roboto({
    weight:'400',
    subsets:['latin']
})
const Navbar = () => {
    const {productNumber,whishlistNumber,productId,isToggle} = useAppSelector((state) => state.cart)
    const dispatch = useAppDispatch()
    const [search,setSearch] = useState(false)


    //function handler
    const handleToggle = () => {
        dispatch(toggleChange())
    }

    const handleSearcch = () => {
        setSearch(search => !search)
    }
  return (
    <div className='flex p-4 bg-gray-200 z-40 fixed max-sm:w-screen'>



        {/*left side navbar*/}
        <div className="flex ">
            <div className={roboto.className}>
                <h1 className="text-3xl font-bold pt-2 max-sm:text-xl max-sm:w-40">
                <Link href='/'>
                Harri Shop
                </Link>
                </h1>
            </div>
            <div className={roboto.className}>
                <ul className="flex p-2 ml-4 mt-2 text-meduim font-medium text-gray-500 max-sm:hidden">
                    <li className="ml-4">
                        <Link href='/'>Home</Link>
                    </li>
                    <li className="ml-4">
                        <Link href='/about'>About</Link>
                    </li>
                    <li className="ml-4">
                        <Link href='/shop'>Shop</Link>
                    </li>
                    <li className="ml-4">
                        <Link href='/'>Pages</Link>
                    </li>
                    <li className="ml-4">
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    
        {/*Right side navbar*/}
        <div className='flex ml-96 mt-4 text-medium font-semibold max-sm:ml-20'>
            <div>
                <input placeholder="Search for products"  className={`h-10 w-56 rounded-2xl p-4 bg-slate-50 ${search ? 'max-sm:-ml-32 max-sm:w-48 max-sm:-mt-8' : 'max-sm:hidden'}`}/>
                <FontAwesomeIcon icon={search ? faCross : faSearch} onClick={handleSearcch} className={`-ml-10 ${search ? 'max-sm:ml-10 max-sm:-mt-10' : 'max-sm:-ml-24'} text-xl text-gray-500`} />
            </div>
           {
            search ? '' : ( <div className='ml-24 max-sm:-ml-20'>
                <ul className='flex'>
                    <li className='ml-8 text-xl'>
                    <Link href='/account'>
                        <FontAwesomeIcon icon={faUser} style={{color: "#597373",}} />
                    </Link>
                    </li>
                    <li className='ml-8 text-xl max-sm:ml-3 max-sm:-mt-2'>
                    <Link href='/whishlist'>
                        <FontAwesomeIcon className='text-3xl relative' icon={faHeart} style={{color: "#535f74",}} />
                        <div className='w-5 h-5 absolute bg-red-500 rounded-full -mt-10 ml-4'>
                            <h1 className='text-sm p-1 -mt-1 text-white'>{productId.length}</h1>
                        </div>
                    </Link>
                    </li>
                    <li className='ml-8 text-xl max-sm:ml-3 max-sm:-mt-2'>
                    <Link href='/shopingcard'>
                        <FontAwesomeIcon className='relative text-3xl' icon={faShoppingBasket} style={{color: "#525f75",}} />
                        <div className='w-5 h-5 absolute bg-red-500 rounded-full -mt-10 ml-4'>
                            <h1 className='text-sm p-1 -mt-1 text-white'>{productNumber}</h1>
                        </div>
                    </Link>
                    </li>
                    <li className='ml-20 text-xl max-sm:ml-3 max-sm:-mt-2 sm:hidden'>
                    <Link href=''>
                        <FontAwesomeIcon icon={faToggleOn}  style={{color: "#597373",}} onClick={handleToggle} />
                    </Link>
                    </li>
                </ul>
            </div>)
           }
        </div>
        <div>
            {
                isToggle ? <Toggle /> : ''
            }
        </div>
        
    </div>
  )
}

export default Navbar