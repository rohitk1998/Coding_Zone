"use client";

import ReactStars from "react-stars";


interface ClientReviewModalProps {
    reviewObj : object | any  ; 
}


const ClientReviewModal : React.FC<ClientReviewModalProps> = ({ reviewObj })=> {
    console.log("review obj" , reviewObj);
    
          return(
            <div className="w-full min-w-[300px] lg:overflow-hidden overflow-y-scroll bg-white flex flex-row justify-start items-start mt-2 rounded-lg">
            <div className="w-full grid grid-row-2">
              <div className="block flex-row items-start justify-start border-b-[1px] mb-2 px-3 py-5 bg-primaryColor">
                <h1 className="text-2xl font-bold text-white">
                  Client's Review
                </h1>
              </div>
              <div className="w-full pt-3 pl-2 items-start justify-start">
                <div className="flex flex-row items-start justify-start px-7">
                  <h1 className="text-2xl font-bold text-gray-500">{reviewObj.clientName}</h1>
                </div>
                <div className="flex flex-row items-start justify-start px-7 mt-2 mb-2">
                  <h1 className="text-lg font-medium text-gray-400">
                   {reviewObj.clientMessage}
                  </h1>
                </div>
                <div className="flex flex-row items-start justify-start px-7 mt-2 mb-2">
                  <ReactStars count={reviewObj.ratingCount} size={24} color1="#ffd700" />
                </div>
              </div>
            </div>
          </div>
          )
}

export default ClientReviewModal ; 