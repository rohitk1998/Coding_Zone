'use client';
import Logo from "../navbar/Logo";


const AppFooter = ()=> {
    return(
        <div className="w-full border-t-2">
         <div className="w-full grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-2 p-10">
            <div className="w-full grid xl:grid-rows-3 p-4">
                 <div>
                    <Logo/>
                 </div>
                 <div className="ml-4 mt-4">
                    <p className="text-start text-md text-gray-400">
                        Making the world a better place through constructing <br/>
                        elegant hierarchies.
                    </p>
                 </div>
            </div>
            <div className="w-full grid xl:grid-rows-6 p-0 lg:items-start lg:justify-center md:items-center md:justify-start md:ml-5 items-start justify-start">
                 <div className="ml-4 mt-4">
                    <p className="text-start font-bold text-lg text-black">
                       Solutions
                    </p>
                 </div>
                 <div className="ml-4 mt-4">
                    <p className="text-start text-sm text-gray-400">
                        Marketing
                    </p>
                 </div>
                 <div className="ml-4 mt-4">
                    <p className="text-start text-sm text-gray-400">
                        Android Development
                    </p>
                 </div>
                 <div className="ml-4 mt-4">
                    <p className="text-start text-sm text-gray-400">
                        IOS Development
                    </p>
                 </div>
                 <div className="ml-4 mt-4">
                    <p className="text-start text-sm text-gray-400">
                        Web
                    </p>
                 </div>
            </div>

            <div className="w-full grid xl:grid-rows-6 p-0 lg:items-start lg:justify-center md:items-center md:justify-start md:ml-5 items-start justify-start">
                 <div className="ml-4 mt-4">
                    <p className="text-start font-bold text-lg text-black">
                       Support
                    </p>
                 </div>
                 <div className="ml-4 mt-4">
                    <p className="text-start text-sm text-gray-400">
                        Pricing
                    </p>
                 </div>
                 <div className="ml-4 mt-4">
                    <p className="text-start text-sm text-gray-400">
                        Documentation
                    </p>
                 </div>
                 <div className="ml-4 mt-4">
                    <p className="text-start text-sm text-gray-400">
                        Guides
                    </p>
                 </div>
                 <div className="ml-4 mt-4">
                    <p className="text-start text-sm text-gray-400">
                       Sales
                    </p>
                 </div>
            </div>

            <div className="w-full grid xl:grid-rows-6 p-0 lg:items-start lg:justify-center md:items-center md:justify-start md:ml-5 items-start justify-start">
                 <div className="ml-4 mt-4">
                    <p className="text-start font-bold text-lg text-black">
                       Company
                    </p>
                 </div>
                 <div className="ml-4 mt-4">
                    <p className="text-start text-sm text-gray-400">
                        Home
                    </p>
                 </div>
                 <div className="ml-4 mt-4">
                    <p className="text-start text-sm text-gray-400">
                        Our Journey
                    </p>
                 </div>
                 <div className="ml-4 mt-4">
                    <p className="text-start text-sm text-gray-400">
                        Contact
                    </p>
                 </div>
                 <div className="ml-4 mt-4">
                    <p className="text-start text-sm text-gray-400">
                        Services
                    </p>
                 </div>
            </div>
         </div>
         <div className="w-full border-t-[1px]">
            <div className="w-full grid grid-cols-2">
            <div className="w-full items-center justify-end flex flex-row p-7">
                    <p className="text-start text-md text-gray-700">
                        @2023 CodingZone Inc.
                    </p>
                 </div>
                 <div className="w-full items-center justify-start flex flex-row py-7">
                 <p className="text-start text-md text-gray-700">
                        All Rights Reserved
                    </p>
                 </div>
            </div>
         </div>
        </div>
    )
}

export default AppFooter ; 