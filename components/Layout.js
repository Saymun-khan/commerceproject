import Footer from "./Footer"
import Navbar from './Navbar'
import Subscribe from "./Subscribe"

const Layout = ({children}) => {
  return (
    <div className=" bg-slate-200">
      <div className="ml-16 mr-16 pl-6 max-sm:pl-2 max-sm:ml-0 max-sm:mr-0">
        <Navbar />
        {children}
        <Subscribe />
        <Footer />
      </div>
    </div>
  )
}

export default Layout