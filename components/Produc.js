import Image from 'next/image'
import Data from './Data'

const Produc = () => {
    return(
        <div className='grid grid-cols-4 ml-16'>
            {
                Data.map(d => {
                    return(
                        <div className='mt-20 mb-40'>
                            <div className={`w-64 h-52 ${d.background} p-6 pl-12`}>
                                <Image 
                                    src={d.img} 
                                    alt='there is a image'
                                    width={150}
                                    height={150}
                                    
                            />
                
                            </div>
                            <h1 className='text-md font-medium
                            text-gray-700'>{d.title}</h1>
                            <div className='w-68 w-52 h-0.5 bg-red-500 mt-10'></div>
                        </div>
                    )
                })
            }
        </div>
    )
}




export default Produc