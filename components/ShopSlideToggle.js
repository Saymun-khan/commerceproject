import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

const ShopSlideToggle = ({Title,OptionOne,OptionTwo}) => {
    const [show,setShow] = useState(false)
  return (
    <div>
         <div>
                <button onClick={() => setShow(!show)} className="flex mt-2">
                    <h1 className="mr-6 w-56 text-start">{Title}</h1>
                    <FontAwesomeIcon className=" mt-1 ml-28" icon={faArrowDown} />
                    
                </button>
                   {show && ( <div>
                        <ul>
                            <li className="list-disc ml-4">{OptionOne}</li>
                            <li className="list-disc ml-4">{OptionTwo}</li>
                        </ul>
                    </div>)}
            </div>
    </div>
  )
}

export default ShopSlideToggle