import React from "react";
import google from "../images/google.png";
import meta from "../images/meta.png";
import apple from "../images/apple.png";
import logo from "../images/logo.png";
import UDrawer from "../Components/UDrawer";
import bar from "../images/bars.png";

function Signup() {
  const [isOpens, setIsOpen] = React.useState(false);
  return (
    <div className=" bg-[linear-gradient(135deg,_rgba(87,120,117,1)_3%,_rgba(74,82,89,1)_30%,_rgba(74,82,89,1)_69%,_rgba(83,107,108,1)_98%)]">
      {/* Nav */}
     <div className='flex justify-between p-5 md:pl-20 md:pr-20  w-full h-[5rem] bg-[#000300]'>
     <div className=" flex ">
            <img onClick={setIsOpen} className=" h-[2rem] w-[2rem] mt-1 lg:hidden" src={bar} alt="" />
            <img  className=" w-[7rem] h-[3rem]" src={logo} alt="" />
        </div> 
        <div className=" hidden md:flex">
            <ul className='mt-2 flex gap-2 md:gap-12 text-sm text-white font-bold'>
                <li>Home</li>
                <li>Login</li>
                <button className=' bg-green-500 text-black text-sm rounded-md px-2 py-1 md:px-4 md:py-2'>Sign Up Now</button>
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
          <h1 className=" text-green-500 hover:text-white font-bold text-xl ">Sign Up Now</h1>
        </div>

       </div>
      </UDrawer>
       </div>



      <div className=" w-full h-[40rem] md:w-[24rem] md:h-[40rem] bg-[#000300] md:m-[2rem] md:ml-[13rem] lg:ml-[38rem] md:rounded-lg">
        <div className=" flex flex-col p-8 pt-[4rem]">
          <h className="text-white font-bold text-xl">Create Your Account</h>
          <span className=" text-white text-sm">SignUp Below</span>
        </div>

        <div className=" flex flex-col gap-2 mt-[3rem] ml-[2rem] mr-[2rem] text-white">
          <input
            className=" px-4 py-2 rounded-md bg-transparent border border-gray-300 hover:border-blue-500"
            placeholder="coolcoder@cool.com"
            type="text"
          />
          <input
            className="  px-4 py-2 rounded-md bg-transparent border border-gray-300 hover:border-blue-500"
            placeholder="Password"
            type="password"
          />
          <input
            className="  px-4 py-2 rounded-md bg-transparent border border-gray-300 hover:border-blue-500"
            placeholder="Reset Password"
            type="password"
          />
          <input
            className="  px-4 py-2 rounded-md bg-transparent border border-gray-600 hover:border-blue-500"
            placeholder="Date of birth"
            type="text"
          />
          <select
            id="countries"
            className=" text-gray-400 px-4 py-2 rounded-md texw bg-transparent border border-gray-300 hover:border-blue-500"
          >
            <option value="US">Country</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        <div className=" flex gap-2  ml-[2rem] mr-[2rem] mt-[2rem]">
          <div>
            <span className=" text-sm text-gray-400">or continue with</span>
          </div>{" "}
          <div className="w-[13rem] h-[1px] mt-4 bg-gray-600"></div>
        </div>

        <div className=" flex gap-2 ml-[2.5rem]  mt-3">
            <div className=" w-[6rem] h-[2.3rem] bg-white rounded-md  cursor-pointer">
                <img className=" absolute h-[1.8rem] w-[1.8rem] ml-8 m-1 rounded-full " src={google} alt="" />
            </div>
            <div className=" w-[6rem] h-[2.3rem] bg-white rounded-md cursor-pointer ">
                <img className=" absolute h-[1.8rem] w-[1.8rem] ml-8 m-1 rounded-full " src={meta} alt="" />
            </div>
            <div className=" w-[6rem] h-[2.3rem] bg-white rounded-md  cursor-pointer">
                <img className=" absolute h-[1.8rem] w-[1.8rem] ml-8 m-1 rounded-full " src={apple} alt="" />
            </div>    
        </div>
        <button className=" w-[11rem] h-[2.2rem] bg-yellow-50 rounded-md ml-[6rem] mt-5">signup</button>
      </div>
      <div className=' grid grid-cols-4 h-[19rem] w-full pt-[5rem] '>
        <div className='ml-5'>
                <svg className=' md:mt-[-2.8rem] md:w-[8rem] md:h-[12rem] w-[6rem] h-[8rem]'  viewBox="0 0 153 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="1.10083" width="152" height="34.9895" stroke="#FFFFE8"/>
                <path d="M0.5 1.10083H152.5V36.0903H0.5V1.10083Z" stroke="#FFFFE8"/>
                <path d="M35.6016 12.5435H39.3164V27.6021H49.9688V30.8599H35.6016V12.5435ZM52.3125 23.9458C52.3125 22.9536 52.5117 22.0239 52.9102 21.1567C53.3164 20.2896 53.8906 19.5317 54.6328 18.8833C55.3828 18.2349 56.2852 17.7231 57.3398 17.3481C58.4023 16.9731 59.5938 16.7856 60.9141 16.7856C62.2344 16.7856 63.4219 16.9731 64.4766 17.3481C65.5391 17.7231 66.4414 18.2349 67.1836 18.8833C67.9336 19.5317 68.5078 20.2896 68.9062 21.1567C69.3125 22.0239 69.5156 22.9536 69.5156 23.9458C69.5156 24.938 69.3125 25.8677 68.9062 26.7349C68.5078 27.6021 67.9336 28.3599 67.1836 29.0083C66.4414 29.6567 65.5391 30.1685 64.4766 30.5435C63.4219 30.9185 62.2344 31.106 60.9141 31.106C59.5938 31.106 58.4023 30.9185 57.3398 30.5435C56.2852 30.1685 55.3828 29.6567 54.6328 29.0083C53.8906 28.3599 53.3164 27.6021 52.9102 26.7349C52.5117 25.8677 52.3125 24.938 52.3125 23.9458ZM55.957 23.9458C55.957 24.5005 56.0664 25.0278 56.2852 25.5278C56.5117 26.02 56.8359 26.4575 57.2578 26.8403C57.6875 27.2153 58.207 27.5161 58.8164 27.7427C59.4336 27.9614 60.1328 28.0708 60.9141 28.0708C61.6953 28.0708 62.3906 27.9614 63 27.7427C63.6172 27.5161 64.1367 27.2153 64.5586 26.8403C64.9883 26.4575 65.3125 26.02 65.5312 25.5278C65.7578 25.0278 65.8711 24.5005 65.8711 23.9458C65.8711 23.3911 65.7578 22.8638 65.5312 22.3638C65.3125 21.8638 64.9883 21.4263 64.5586 21.0513C64.1367 20.6685 63.6172 20.3677 63 20.1489C62.3906 19.9224 61.6953 19.8091 60.9141 19.8091C60.1328 19.8091 59.4336 19.9224 58.8164 20.1489C58.207 20.3677 57.6875 20.6685 57.2578 21.0513C56.8359 21.4263 56.5117 21.8638 56.2852 22.3638C56.0664 22.8638 55.957 23.3911 55.957 23.9458ZM75.1875 33.2036C75.625 33.3599 76.0703 33.4888 76.5234 33.5903C76.9766 33.6997 77.4141 33.7856 77.8359 33.8481C78.2656 33.9185 78.6758 33.9653 79.0664 33.9888C79.457 34.02 79.8047 34.0356 80.1094 34.0356C81.0312 34.0356 81.832 33.9224 82.5117 33.6958C83.1992 33.4771 83.7695 33.1802 84.2227 32.8052C84.6836 32.4302 85.0273 31.9927 85.2539 31.4927C85.4805 31.0005 85.5938 30.4771 85.5938 29.9224V29.3247C85.2969 29.5278 84.9492 29.7231 84.5508 29.9106C84.1523 30.0981 83.7148 30.2622 83.2383 30.4028C82.7617 30.5435 82.2539 30.6567 81.7148 30.7427C81.1836 30.8286 80.6328 30.8716 80.0625 30.8716C78.9297 30.8716 77.8828 30.7036 76.9219 30.3677C75.9609 30.0239 75.1289 29.5474 74.4258 28.938C73.7227 28.3208 73.1719 27.5825 72.7734 26.7231C72.3828 25.8638 72.1875 24.9106 72.1875 23.8638C72.1875 22.7935 72.3945 21.8247 72.8086 20.9575C73.2227 20.0825 73.793 19.3364 74.5195 18.7192C75.2539 18.1021 76.1211 17.6255 77.1211 17.2896C78.1211 16.9536 79.207 16.7856 80.3789 16.7856C80.8789 16.7856 81.375 16.8169 81.8672 16.8794C82.3594 16.9419 82.8281 17.0278 83.2734 17.1372C83.7266 17.2466 84.1484 17.3794 84.5391 17.5356C84.9375 17.6841 85.2891 17.8481 85.5938 18.0278V17.0317H89.0625V29.2778C89.0625 30.5356 88.8711 31.6489 88.4883 32.6177C88.1055 33.5864 87.543 34.3989 86.8008 35.0552C86.0664 35.7192 85.1523 36.2192 84.0586 36.5552C82.9648 36.8989 81.7109 37.0708 80.2969 37.0708C79.7891 37.0708 79.2617 37.0474 78.7148 37.0005C78.168 36.9614 77.6172 36.8989 77.0625 36.813C76.5156 36.7349 75.9727 36.6372 75.4336 36.52C74.9023 36.4106 74.3906 36.2817 73.8984 36.1333L75.1875 33.2036ZM75.832 23.8286C75.832 24.3833 75.9414 24.9067 76.1602 25.3989C76.3867 25.8833 76.707 26.3091 77.1211 26.6763C77.5352 27.0356 78.0352 27.3208 78.6211 27.5317C79.207 27.7349 79.8672 27.8364 80.6016 27.8364C81.0781 27.8364 81.5508 27.7935 82.0195 27.7075C82.4961 27.6138 82.9492 27.4849 83.3789 27.3208C83.8164 27.1567 84.2227 26.9575 84.5977 26.7231C84.9805 26.4888 85.3125 26.2271 85.5938 25.938V21.3794C85.2422 21.0981 84.8711 20.8599 84.4805 20.6646C84.0898 20.4692 83.6914 20.3091 83.2852 20.1841C82.8789 20.0591 82.4688 19.9692 82.0547 19.9146C81.6406 19.8521 81.2383 19.8208 80.8477 19.8208C80.0508 19.8208 79.3398 19.9263 78.7148 20.1372C78.0977 20.3481 77.5742 20.6372 77.1445 21.0044C76.7227 21.3638 76.3984 21.7856 76.1719 22.27C75.9453 22.7544 75.832 23.2739 75.832 23.8286ZM92.1797 23.9458C92.1797 22.9536 92.3789 22.0239 92.7773 21.1567C93.1836 20.2896 93.7578 19.5317 94.5 18.8833C95.25 18.2349 96.1523 17.7231 97.207 17.3481C98.2695 16.9731 99.4609 16.7856 100.781 16.7856C102.102 16.7856 103.289 16.9731 104.344 17.3481C105.406 17.7231 106.309 18.2349 107.051 18.8833C107.801 19.5317 108.375 20.2896 108.773 21.1567C109.18 22.0239 109.383 22.9536 109.383 23.9458C109.383 24.938 109.18 25.8677 108.773 26.7349C108.375 27.6021 107.801 28.3599 107.051 29.0083C106.309 29.6567 105.406 30.1685 104.344 30.5435C103.289 30.9185 102.102 31.106 100.781 31.106C99.4609 31.106 98.2695 30.9185 97.207 30.5435C96.1523 30.1685 95.25 29.6567 94.5 29.0083C93.7578 28.3599 93.1836 27.6021 92.7773 26.7349C92.3789 25.8677 92.1797 24.938 92.1797 23.9458ZM95.8242 23.9458C95.8242 24.5005 95.9336 25.0278 96.1523 25.5278C96.3789 26.02 96.7031 26.4575 97.125 26.8403C97.5547 27.2153 98.0742 27.5161 98.6836 27.7427C99.3008 27.9614 100 28.0708 100.781 28.0708C101.562 28.0708 102.258 27.9614 102.867 27.7427C103.484 27.5161 104.004 27.2153 104.426 26.8403C104.855 26.4575 105.18 26.02 105.398 25.5278C105.625 25.0278 105.738 24.5005 105.738 23.9458C105.738 23.3911 105.625 22.8638 105.398 22.3638C105.18 21.8638 104.855 21.4263 104.426 21.0513C104.004 20.6685 103.484 20.3677 102.867 20.1489C102.258 19.9224 101.562 19.8091 100.781 19.8091C100 19.8091 99.3008 19.9224 98.6836 20.1489C98.0742 20.3677 97.5547 20.6685 97.125 21.0513C96.7031 21.4263 96.3789 21.8638 96.1523 22.3638C95.9336 22.8638 95.8242 23.3911 95.8242 23.9458Z" fill="#343434"/>
                </svg>
                <p className=' text-sm text-gray-200 mt-[-3rem]'>@All right reserved 2023</p>
            </div>
            <div>
                <span className=' text-sm text-gray-200'>title</span>
            </div>
            <div className=' flex flex-col gap-3'>
                <span className=' text-sm text-gray-200'>Support</span>
                <span className=' text-sm text-gray-200'>Frequently Asked Question</span>
            </div>
            <div>
                <span className=' text-sm text-gray-200 font-bold'>title</span>
            </div>
        </div>
    </div>
  );
}

export default Signup;
