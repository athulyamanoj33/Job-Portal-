import Footer from "../Components/Footer/Footer"
import Jobs from "../Components/Jobs/Jobs"
import Nav from "../Components/Navbar/Nav"
import Search from "../Components/Search/Search"


function Homepage() {
  return (
    <div>
    <Nav/>
    <Search/>
    <Jobs/>
    
    <Footer/>
    </div>
  )
}

export default Homepage