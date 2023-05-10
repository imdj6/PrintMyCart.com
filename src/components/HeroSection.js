import React from "react";
import HeroImage from "../assets/images/background.png";
import Button from "./Uicomponents/Button";
import {BsChatLeftQuoteFill} from 'react-icons/bs'
import {MdContactPhone} from 'react-icons/md'
import Group1 from '../assets/images/Group 4.png'
import Group2 from '../assets/images/Group 5.png'
import Group3 from '../assets/images/Group 6.png'
import Group4 from '../assets/images/Group 7.png'

function HeroSection() {
  return (
    <div>
      <div className="relative font-[poppins]">
        <img src={HeroImage} className="object-cover h-[60vh] lg:h-[67vh] w-full " alt="heroimage"/>
        <div className="mt-100 absolute bottom-10 mx-9">
          <div className="text-white text-5xl font-bold tracking-widest font-[poppins]">
            <span className="text-[#CF211A] font-bold text-5xl">3D </span>{" "}
            PRINTING
          </div>
          <div className="text-5xl text-white font-bold tracking-widest mt-2">
            SERVICES
          </div>
          <div className="flex space-x-10">
            <div className="mt-10">
              <Button active buttonText="GET A QUOTE" icon={BsChatLeftQuoteFill} />
            </div>
            <div className="mt-10">
              <Button buttonText="CONTACT SELLER" icon={MdContactPhone} />
            </div>
          </div>
        </div>
      </div>

      {/* {About Section Starts} */}

      <section className="m-24">
          <div className="tracking-[2px] text-5xl text-center">
            ABOUT <span className="text-[#CF211A]">US</span>
          </div>
          <div>
          <div className="text-2xl mt-8 p-8 lg:p-16 text-center font-[poppins]">
            Lorem ipsum dolor sit amet. Et molestiae consequatur vel labore
            doloremque et distinctio laborum ut dolor iste ab voluptatem illum?
            Eum quidem quae et facilis dolor est totam ipsa quo sint quia a
            cupiditate fugit! Non nesciunt culpa et sunt corrupti aut
            necessitatibus reiciendis aut aspernatur praesentium qui tempora
            voluptates? Sed pariatur ipsum est exercitationem possimus qui
            deleniti nostrum. Id dolor nisi id molestiae numquam quo voluptatem
            sapiente.
          </div>
          </div>
      </section>


      {/* {Features section starts} */}
      <div className="flex justify-center space-x-10 lg:space-x-32 m-24">
        <div><img src={Group1} width={200}/></div>
        <div><img src={Group2} width={200}/></div>
        <div><img src={Group3} width={200}/></div>
        <div><img src={Group4} width={200}/></div>
      </div>
    </div>
  );
}

export default HeroSection;
