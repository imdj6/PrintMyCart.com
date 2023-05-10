import React from "react";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";

function NavBar() {
  return (
    <>
      <div className="bg-[#0c63e2] text-white p-3 text-center tracking-widest font-[poppins]">
        Be a maker Be creative
      </div>
      <div className="flex justify-between items-center p-5 bg-[#10131B] font-[inter] text-white">
        <div className="flex space-x-16 mx-2">
          <div className="cursor-pointer">HOME</div>
          <div className="cursor-pointer">SERVICES</div>
          <div className="cursor-pointer">ABOUT US</div>
          <div className="cursor-pointer">CONTACT US</div>
        </div>
        <div className="flex space-x-10 mx-2">
          <div className="cursor-pointer">
            <AiOutlineSearch size={30} color="white" />
          </div>
          <div className="cursor-pointer">
            <AiOutlineShoppingCart size={30} color="white" />
          </div>
          <div className="cursor-pointer">
            <RxAvatar size={30} color="white" />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
