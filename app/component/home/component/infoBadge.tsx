"use client";

interface InfoBadgeProps {
  item1: string;
  item2: string;
}

const InfoBadge: React.FC<InfoBadgeProps> = ({ item1, item2 }) => {
  return (
    <div className="p-2 mx-auto flex flex-col items-start xl:justify-center lg:justify-cetner justify-start lg:mt-0 md:mt-0 sm:mt-5 mt-5">
      <h1 className="text-lg font-bold text-white md:text-3xl lg:text-4xl">
        {item1}
      </h1>
      <p className="mb-1 text-sm font-normal text-white md:text-lg lg:text-lg">
        {item2}
      </p>
    </div>
  );
};

export default InfoBadge;
