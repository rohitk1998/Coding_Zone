"use client";
import Image from "next/image";
import CrossIcon from "../../public/images/crossBtn.png";

interface ModalCommonProps {
   isVisible : boolean ; 
   onClose : Function ; 
   children : JSX.Element;
}

const CommonModal: React.FC<ModalCommonProps> = ({ isVisible , onClose , children  }) => {

   if(!isVisible) return null ; 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-5 backdrop-blur-sm flex justify-center items-center"
    onClick={()=> onClose()}
    >
      <div className="w-[40%] min-w-[300px] flex flex-col justify-center items-center">
        <div className="w-full flex flex-row justify-end items-center">
          <Image
            alt="crossBtn"
            src={CrossIcon}
            className="w-10 h-10 bg-secondaryColor rounded-full p-3 cursor-pointer"
            onClick={()=> onClose()}
          />
        </div>
       {children}
      </div>
    </div>
  );
};

export default CommonModal;
