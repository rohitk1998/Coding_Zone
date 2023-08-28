"use client";
import Container from "../Container";
import Overview from "./component/overview";
import IntroCoverImage from "./component/introCover";
import IntroBadgeContainer from "./component/IntroBadgeComponent";
import FeaturedProduct from "./component/featuredProduct";
import MobileDev from "../../../public/images/mobiledev.jpg";
import OurProcess from "./component/ourProcess";
import Testimonial from "./component/testimonial";

export default function Home() {
  return (
    <>
      {/* Intro Section End */}
      <Container>
        <div
          className="
            lg:pt-[160px]
            md:pt-[10px]
            sm:pt-[40px]
            pt-[60px]
            grid 
            grid-cols-1 
            sm:grid-cols-1 
            md:grid-cols-1 
            lg:grid-cols-2
            xl:grid-cols-2
            2xl:grid-cols-2"
        >
          <IntroCoverImage image={MobileDev} />
          <IntroBadgeContainer />
        </div>
        {/* Intro Section End */}
      </Container>
      {/* Company Overview Section Start */}
      <Container>
      <Overview />
      </Container>
      {/* Company Overview Section End */}
      {/* Our Products Start */}
      <div className="flex w-[100%] bg-white">
        <FeaturedProduct />
      </div>
      {/* Our Products End */}
      {/* Our Process Start */}
      <OurProcess />
      {/* Our Process End */}
      {/* Tetimonial Start */}
      <Testimonial/>
      {/* Testimonial End */}
    </>
  );
}
