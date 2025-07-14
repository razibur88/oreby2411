import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Logo from "../assets/logo.png";
import Container from "./Container";

const Header = () => {
    let [menu, setMenu] = useState(false)
  return (
    <header className="py-3">
      <Container>
        <div className="lg:flex items-center">
          <div className="lg:w-2/12 relative">
            <img src={Logo} alt="" />
          </div>
          <div className="w-full lg:w-10/12">
            <ul className={`lg:flex gap-6 justify-center duration-300 ease-in-out ${menu == true ? "bg-[#262626] h-[0px] opacity-0" : "bg-[red] h-[200px] opacity-100" }`}>
              <li className="font-dm text-[16px] text-[#767676] hover:text-[#262626] duration-300 ease-in-out hover:font-bold">
                Home
              </li>
              <li className="font-dm text-[16px] text-[#767676] hover:text-[#262626] duration-300 ease-in-out hover:font-bold">
                Shop
              </li>
              <li className="font-dm text-[16px] text-[#767676] hover:text-[#262626] duration-300 ease-in-out hover:font-bold">
                About
              </li>
              <li className="font-dm text-[16px] text-[#767676] hover:text-[#262626] duration-300 ease-in-out hover:font-bold">
                Contact
              </li>
              <li className="font-dm text-[16px] text-[#767676] hover:text-[#262626] duration-300 ease-in-out hover:font-bold">
                Journal
              </li>
            </ul>
          </div>
          <div
            className="lg:hidden absolute top-[10px] right-2"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <RxCross2 /> : <FaBars />}
          </div>
        </div>
      </Container>
    </header>
  );
}
export default Header