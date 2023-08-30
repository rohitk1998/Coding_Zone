"use client";

import ReactStars from "react-stars";


interface ClientReviewModalProps {
    reviewObj : object | any  ; 
}


const ClientReviewModal : React.FC<ClientReviewModalProps> = ({ reviewObj })=> {
    console.log("review obj" , reviewObj);
    
          return(
            <div className="w-full min-w-full xl:overflow-hidden
             lg:overflow-y-scroll md:overflow-y-scroll
              overflow-y-scroll bg-white flex flex-row 
            justify-center items-center rounded-b-lg pt-4
            ">
              <div className="w-[90%] pl-2 flex-row items-center justify-center
              xl:h-auto lg:h-auto md:h-[250px] sm:h-auto h-[250px]
              pt-4
              ">
                <div className="flex flex-row items-start justify-start px-7">
                  <h1 className="text-2xl font-bold text-gray-500">{reviewObj.clientName}</h1>
                </div>
                <div className="flex flex-row items-start justify-start px-7 mt-2 mb-2">
                  <h1 className="xl:text-lg lg:text-md md:text-md text-md font-medium text-gray-400">
                   {reviewObj.clientMessage}
                  </h1>
                </div>
                <div className="flex flex-row items-start justify-start px-7 mt-2 mb-2">
                  <ReactStars count={reviewObj.ratingCount} size={24} color1="#ffd700" />
                </div>
              </div>
          </div>
          )
}

export default ClientReviewModal ; 