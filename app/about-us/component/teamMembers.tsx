"use client";

import { Container } from "@/app/component";
import Reveal from "../../component/reveal";
import { employees } from "./data"
import MemberCard from "./memberCard";

const TeamMembers = () => {
  return (
    <Container>
        <div
      className="
        w-full
        grid 
        grid-row-1 
        sm:grid-row-1 
        md:grid-row-1 
        lg:grid-row-2
        xl:grid-row-2
        2xl:grid-row-2
        "
    >
      <div className="w-[100%] mx-auto flex flex-col items-center xl:justify-center lg:justify-cetner justify-center rounded-[20px]">
        <Reveal className="w-full">
          <h1 className="mb-4 text-3xl font-bold text-black md:text-3xl lg:text-5xl ml-2">
            Meet Our Team
          </h1>
        </Reveal>
      </div>
      <div
      className="w-full
        grid 
        grid-cols-1 
        sm:grid-cols-3 
        md:grid-cols-3 
        lg:grid-cols-4
        xl:grid-cols-6
        gap-11
        mt-[30px]
        ">
            {employees.map((employee)=> {
        return(
            <MemberCard
            key={employee.image}
            image={employee.image}
            designation={employee.designation}
            name={employee.name}
            socialLink=""
            />
        )
      })}
      </div>
      
    </div>
    </Container>
  );
};

export default TeamMembers;
