'use client';

const IntroHeading = () => {
  return (
    <div className="w-[90%] lg:mt-[0] md:mt-[40px] mt-[20px] mx-auto flex flex-row items-center xl:justify-end lg:justify-end justify-center rounded-[20px]">
      <h1 className="mb-4 text-3xl font-serif font-extrabold text-black dark:text-white md:text-4xl lg:text-5xl xl:text-6xl ml-2 text-center">
        From Concept to Code, We Turn Ideas into{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-orange-500">
          Intuitive and Impactful
        </span>{" "}
        Software.
      </h1>
    </div>
  );
};

export default IntroHeading;
