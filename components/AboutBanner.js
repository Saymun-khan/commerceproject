import { faArrowAltCircleUp, faMobile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const AboutBanner = () => {
  return (
    <div className="bg-white">
      <div className="h-96 bg-gray-300 text-center">
        <h1 className="text-xl text-black font-semibold p-28">About Us</h1>
        <h1 className="text-5xl font-extrabold text-black">Welcome to our</h1>
        <h1 className="text-5xl font-extrabold text-black">Harri shop</h1>
      </div>
      <div>
        <div className="p-10 mt-20 mb-20 grid grid-cols-2 bg-white">
          <div>
            <h1 className="text-3xl font-bold">It started with a<br></br>
            bang now we are here</h1>
          </div>
          <div>
            <h1 className="text-slate-700 text-medium">Ut at maximus magna. Vestibulum interdum sapien in facilisis imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ac placerat risus. Nullam eget tortor felis. Nulla facilisi.Vestibulum mattis diam non luctus elementum. Cras sollicitudin, nisi in semper viverra, felis diam consequat mi, quis tincidunt ligula
            <br></br>
            <br></br>
            <br></br>
            Nam nibh diam, varius quis lectus eget, laoreet cursus metus. morbi augue lectus, dapibus eget justo nec, consectetur auctor nis luctus neque.!</h1>
          </div>
        </div>
        <div className="grid grid-cols-3 p-10 gap-x-40">
        <div className="w-80 h-52 bg-slate-300">
        
        <div>
          <div className="p-10 grid grid-cols-2">
            <FontAwesomeIcon icon={faMobile} className="text-3xl" />
            <FontAwesomeIcon className="text-3xl ml-20" icon={faArrowAltCircleUp} />
          </div>
          <h1 className="ml-8 font-semibold text-slate-700">10k</h1>
          <h1 className="ml-8 text-2xl font-semibold mt-4">Listed Products</h1>
        </div>
      </div>
      <div className="w-80 h-52 bg-slate-300">
        
          <div>
            <div className="p-10 grid grid-cols-2">
              <FontAwesomeIcon icon={faMobile} className="text-3xl" />
              <FontAwesomeIcon className="text-3xl ml-20" icon={faArrowAltCircleUp} />
            </div>
            <h1 className="ml-8 font-semibold text-slate-700">10k</h1>
            <h1 className="ml-8 text-2xl font-semibold mt-4">Listed Products</h1>
          </div>
        </div>
        <div className="w-80 h-52 bg-slate-300">
        
          <div>
            <div className="p-10 grid grid-cols-2">
              <FontAwesomeIcon icon={faMobile} className="text-3xl" />
              <FontAwesomeIcon className="text-3xl ml-20" icon={faArrowAltCircleUp} />
            </div>
            <h1 className="ml-8 font-semibold text-slate-700">10k</h1>
            <h1 className="ml-8 text-2xl font-semibold mt-4">Listed Products</h1>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default AboutBanner