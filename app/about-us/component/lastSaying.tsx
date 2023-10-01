import { Container, Reveal } from "@/app/component";

const LastSaying = () => {
  return (
    <Container>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="h-[100px]">
            <h2 className="mb-4 text-3xl font-bold text-black md:text-3xl lg:text-5xl ml-2">
              {"Trusted by the world`s most innovative teams"}
            </h2>
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <Reveal className="">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                alt="Transistor"
                // width={158}
                // height={48}
              />
            </Reveal>
            <Reveal className="">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                alt="Reform"
                // width={158}
                // height={48}
              />
            </Reveal>
            <Reveal className="">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                alt="Tuple"
                // width={158}
                // height={48}
              />
            </Reveal>
            <Reveal className="">
              <img
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                alt="SavvyCal"
                // width={158}
                // height={48}
              />
            </Reveal>
            <Reveal className="">
              <img
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                alt="Statamic"
                // width={158}
                // height={48}
              />
            </Reveal>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LastSaying;
