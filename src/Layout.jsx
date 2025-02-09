import { Outlet } from "react-router-dom";
import { Navbar1 } from "./Components/Navbar1";
import { Link } from "react-router-dom";

 
export function Layout() {
  return (
    <>
      <Navbar1 />
      <main>
        <Outlet/>
      </main>
    </>
  )
}