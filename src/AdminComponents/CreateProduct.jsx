import React from "react";
import "../CSSPages/Offer.css";


function CreateProduct() {
  return ( 
      <section className="flex flex-col m-auto p-auto">
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap  ">
            {/*1  */}
            <div className="inline-block px-1 md:px-1">
           
              <div className=" px-3  lg:w-full h-full md:h-[350px] rounded-2xl p-10 bg-[#000300]">
            
              <div className="  flex flex-col md:flex-row gap-10">
              <div className=" flex flex-col md:flex-row gap-5">

                    <div className=" flex flex-col gap-4 text-white">
                    <div>
                        <input
                        className="  w-[19rem] md:w-[12rem] px-4 py-2 rounded-md bg-transparent border border-gray-300 hover:border-blue-500"
                        placeholder="Name"
                        type="text"
                        />
                    </div>

                    <div>
                        <select
                        id="countries"
                        className=" text-gray-400 w-[19rem] md:w-[12rem] px-4 py-2 rounded-md texw bg-transparent border border-gray-300 hover:border-blue-500"
                        >
                        <option value="US">Category</option>
                        <option value="CA">Category 1</option>
                        <option value="FR">Category 2</option>
                        <option value="DE">Category 3</option>
                        </select>
                    </div>

                    <div>
                        <input
                        className="  w-[19rem] md:w-[12rem] px-4 py-2 rounded-md bg-transparent border border-gray-300 hover:border-blue-500"
                        placeholder="Price"
                        type="text"
                        />
                    </div>

                    <div>
                        <input
                        className="  w-[19rem] md:w-[12rem] px-4 py-2 rounded-md bg-transparent border border-gray-300 hover:border-blue-500"
                        placeholder="Purchase Endpoint"
                        type="text"
                        />
                    </div>

                    <div>
                        <input
                        className="  w-[19rem] md:w-[12rem] px-4 py-2 rounded-md bg-transparent border border-gray-300 hover:border-blue-500"
                        placeholder="Purchase Payload"
                        type="text"
                        />
                    </div>
                    </div>

                    <div className="text-white ">
                    <textarea
                        className=" w-full md:w-[280px] lg:w-[550px] px-4 py-2 rounded-md bg-transparent border border-gray-300 hover:border-blue-500"
                        placeholder="us-1m.proxies.land:8000us-1m.proxies.land:8000us-1m.proxies.land:8000us-1m.proxies.land:8000us-1m.proxies.land:8000"
                        type="text"
                        rows={10}
                    />
                    </div>

              </div>

              <div className=" flex flex-col gap-3 md:mt-[12rem] pl-[60px] md:pl-0 lg:pr-5">
                <button className=" bg-[#00B795]  text-xs md:text-sm w-[180px] px-3 py-[8px] rounded-lg">
                  Mark as paid
                </button>
                <button className=" bg-[#FFFFE8]  text-xs md:text-sm w-[180px] px-3 py-[8px] rounded-lg">
                  Mark as paid
                </button>
              </div>
            </div>
              </div>
            </div>

            

           
          </div>
        </div>
      </section>

  );
}

export default CreateProduct;










