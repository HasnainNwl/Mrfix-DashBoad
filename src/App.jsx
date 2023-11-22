import { Footer, NavMenu, Navbar } from "./components"
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar />
      <hr />
      <NavMenu />
      <div className="w-full h-full mb-[100px]">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
