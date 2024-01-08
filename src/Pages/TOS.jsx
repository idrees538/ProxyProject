import React from "react";
import bar from "../images/bars.png";
import "./Scroll.css";
import logo from "../images/logo.png";
import Footer from "../Components/Footer";
import UDrawer from "../Components/UDrawer";

function TOS() {
  const [isOpens, setIsOpen] = React.useState(false);
  return (
    <div>
      <div className=" bg-[linear-gradient(135deg,_rgba(87,120,117,1)_3%,_rgba(74,82,89,1)_30%,_rgba(74,82,89,1)_69%,_rgba(83,107,108,1)_98%)]">
        {/* Nav */}
        <div className="flex justify-between p-5 md:pl-20 md:pr-20  w-full h-[5rem] bg-[#000300]">
          <div className=" flex ">
            <img
              onClick={setIsOpen}
              className=" h-[2rem] w-[2rem] mt-1 lg:hidden"
              src={bar}
              alt=""
            />
            <img className=" w-[7rem] h-[3rem]" src={logo} alt="" />
          </div>
          <div className=" hidden md:flex">
            <ul className="mt-2 flex gap-2 md:gap-12 text-sm text-white font-bold">
              <li className=" mt-1">Home</li>
              <li className=" mt-1">Login</li>
              <button className=" bg-[#00B795] text-black text-sm rounded-md px-2 py-1 md:px-4 md:py-2">
                Sign Up Now
              </button>
            </ul>
          </div>
        </div>
        {/* Drawer */}
        <div className=" lg:hidden ">
          <UDrawer isOpen={isOpens} setIsOpen={setIsOpen}>
            <div className=" flex flex-col gap-2 mt-[1rem]">
              <div className=" flex gap-5 px-10 py-5 hover:bg-gray-400 w-[15rem] rounded-r-md">
                <h1 className=" text-white font-bold text-xl ">Home</h1>
              </div>

              <div className=" flex gap-5 px-10 py-5 hover:bg-gray-400 w-[15rem] rounded-r-md">
                <h1 className=" text-white font-bold text-xl ">Login</h1>
              </div>

              <div className=" flex gap-5 px-10 py-5 hover:bg-green-600 w-[15rem] rounded-r-md">
                <h1 className=" text-green-500 hover:text-white font-bold text-xl ">
                  Sign Up Now
                </h1>
              </div>
            </div>
          </UDrawer>
        </div>
        {/* content */}
        <div className=" md:ml-1 lg:ml-20 mt-10 lg:mt-40 p-5">
          <h1 className=" text-white text-3xl lg:text-5xl font-bold">
            Terms of Service
          </h1>

          <p className="text-base mt-6 md:w-[30rem] text-[#FFFFE8]">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            laboriosam voluptates sed beatae?
          </p>
          <div className=" flex flex-col  ">

            <div className=" bg-[#343434] shadow-md shadow-[#000300] lg:mr-24 w-[100%] h-[30rem]  mt-8 rounded-md p-5 overflow-y-scroll">          
                <div className="flex text-white flex-col gap-7">
                  <h3 className="md:text-lglg:text-xl font-semibold">
                    Section 1.10.32 of “de Finibus Bonorum et Malorum”, written
                    by Cicero in 45 BC
                  </h3>
                  <p className=" text-sm lg:text-base">
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non."
                  </p>

                  <p className=" text-sm lg:text-base">
                    {" "}
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </p>

                  <p className=" text-sm lg:text-base">
                    What is a proxy generator and how do i use it cause this is
                    a longer question to test the boundaries of this FAQ entry
                    and how it should look for dev.
                  </p>

                  <h3 className="md:text-lglg:text-xl font-semibold">
                  Section 1.10.32 of “de Finibus Bonorum et Malorum”, written by Cicero in 45 BC
                  </h3>

                  <p className=" text-sm lg:text-base">
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non."
                  </p>

                  <p className=" text-sm lg:text-base">
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non."
                  </p>

                  <p className=" text-sm lg:text-base">
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non."
                  </p>
                </div>  
            </div>

            <div className=" mt-8 text-center mr-[78rem]">
              <button className=" bg-gray-100 text-black text-sm rounded-md w-[10rem] px-2 py-2">
                View Privacy Policy
              </button>
            </div>

          </div>
        </div>
        {/* footer */}
        <Footer />
      </div>
    </div>
  );
}

export default TOS;
