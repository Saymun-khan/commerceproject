import { faAlignLeft, faAnchorLock, faAppleWhole, faCrosshairs } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useAppDispatch } from '../src/hooks'
import { toggleChange } from '../src/redux/cartSlice'

const Toggle = () => {
  const dispatch = useAppDispatch()
  const handleChange = () => {
    dispatch(toggleChange())
  }
  return (
    <div>
    <div class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

<div class="fixed inset-0 overflow-hidden">
<div class="absolute inset-0 overflow-hidden">
  <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
    <div class="pointer-events-auto w-screen max-w-md">
      <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
        <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          <div className='ml-64 mt-4'>
            <FontAwesomeIcon onClick={handleChange} className='text-2xl' icon={faCrosshairs} />
          </div>
          <div class="mt-6">
            <div class="flow-root">
              <ul role="list" class="-my-6 divide-y divide-gray-300">
                <li class="flex py-6">
                  <h1 className='text-2xl font-bold ml-6'>
                    <Link href='/' onClick={handleChange}>Home</Link>
                  </h1>
                </li>

                <li class="flex py-6">
                  <h1 className='text-2xl font-bold ml-6'>
                    <Link href='/about' onClick={handleChange}>About Us</Link>
                  </h1>
                </li>
                <li class="flex py-6">
                  <h1 className='text-2xl font-bold ml-6'>
                    <Link href='/shop' onClick={handleChange}>Shop</Link>
                  </h1>
                </li>
                <li class="flex py-6">
                  <h1 className='text-2xl font-bold ml-6'>
                    <Link href='/' onClick={handleChange}>Pages</Link>
                  </h1>
                </li>
                <li class="flex py-6">
                  <h1 className='text-2xl font-bold ml-6'>
                    <Link href='/contact' onClick={handleChange}>Contact Us</Link>
                  </h1>
                </li>
                <li class="flex py-6">
                  <button className='text-2xl font-bold ml-6 w-56 h-10 bg-pink-600 my-6 text-white hover:bg-black'>
                    <Link href='/contact'>Contact Us</Link>
                  </button>
                </li>
                <div class="pl-3 py-6">
                <h1 className='text-3xl font-bold ml-6 inline-block mt-20'>Follow:</h1>
                <div>
                    <button className='w-16 h-16 bg-gray-200 border-2 border-gray-400 p-3 mt-8 ml-6 text-xl'>
                        <FontAwesomeIcon icon={faAnchorLock} />
                    </button>
                    <button className='w-16 h-16 bg-gray-200 border-2 border-gray-400 p-3 mt-8 ml-6 text-xl'>
                        <FontAwesomeIcon icon={faAlignLeft} />
                    </button>
                    <button className='w-16 h-16 bg-gray-200 border-2 border-gray-400 p-3 mt-8 ml-6 text-xl'>
                        <FontAwesomeIcon icon={faAppleWhole} />
                    </button>
                </div>
                <div className='mt-16 ml-4 text-2xl font-semibold text-gray-600'>
                    <h1 className='mt-6 mb-3'>+08801824599641</h1>
                    <h1>saymunkhan@gmail.com</h1>
                </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>

</div>
  )
}

export default Toggle