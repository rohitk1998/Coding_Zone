"use client";
import Image from "next/image";
import CrossIcon from "../../public/images/crossBtn.png";

interface ModalCommonProps {
  isVisible: boolean;
  onClose: Function;
  children: JSX.Element;
  modalTitle: string;
}

const CommonModal: React.FC<ModalCommonProps> = ({
  isVisible,
  onClose,
  children,
  modalTitle,
}) => {
  if (!isVisible) return null;

  const handleClose = (event: any) => {
    if (event.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-5 backdrop-blur-sm flex justify-center items-center"
      onClick={handleClose}
      id="wrapper"
    >
      <div className="w-[40%] min-w-[300px] flex flex-col justify-center items-center">
        <div className="w-full flex flex-row justify-end items-center">
          <Image
            alt="crossBtn"
            src={CrossIcon}
            className="w-10 h-10 bg-secondaryColor rounded-full p-3 cursor-pointer"
            onClick={() => onClose()}
          />
        </div>
        {modalTitle && (
          <div className="w-full block flex-row items-start justify-start border-b-[1px] px-3 mt-2 py-5 bg-primaryColor rounded-t-lg">
            <h1 className="text-2xl font-bold text-white">{modalTitle}</h1>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default CommonModal;
