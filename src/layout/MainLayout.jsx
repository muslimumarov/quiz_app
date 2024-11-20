import { Outlet } from "react-router-dom"
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"

function MainLayout() {
  return (
    <div>
       <Navbar/>
       <main>
        <Outlet/>
       </main>
       <Footer/>
    </div>
  )
}

export default MainLayout
