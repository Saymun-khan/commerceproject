import MainBar from "../../components/MainBar"
import Toggle from '../../components/Toggle'
import { useAppSelector } from "../hooks"

const Home = () => {
  const {isToggle} = useAppSelector((state) => state.cart)
  return(
    <div>
      {
        isToggle ? <Toggle /> : <MainBar />
      }
    </div>
  )
}

export default Home