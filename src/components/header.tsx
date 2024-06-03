import Navbar from "./navbar"
import SelectionsBar from "./selectionsbar"

const Header = () => {
  return (
    <div className='sticky-top shadow'>
      <Navbar />
      <SelectionsBar />
    </div>
  )
}
export default Header