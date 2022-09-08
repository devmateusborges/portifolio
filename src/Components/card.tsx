import { GithubLogo, InstagramLogo, LinkedinLogo, SignIn } from "phosphor-react";
import Icon from "./svg";

export function Card() {
  return (
    <div className="bg-img min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col ">

      <div className="flex flex-row mt-11 items-center justify-center p-[100px]  pl-[300px] ">
        <div className="">
          <h1 className="text-6xl">Mateus Borges</h1>
          <span className="text-6xl text-green-400 bold">Full-Stack</span>
          
          <p className="bold w-[600px] mt-8">
            Sou estudante de sistemas de informação, com experiência em
            automação, e trabalho como junior, sendo full stack atualmente focado nas tecnologias web,
            React, ReactNative, nodeJS e python  para ver meus trabalhos no Github, linkedin.
          </p>
          <div className="mt-11 flex justify-center items-center ">
            <a
              href="https://github.com/Spekytro15"
              className="bg-green-500 p-3  rounded  hover:bg-green-900 text-stone-50 flex justify-center items-center"
            >
              <GithubLogo size={28} />
              Github
            </a>

            <a
              href="https://www.linkedin.com/in/mateus-borges-b49a20170/recent-activity/shares/"
              className=" border  border-blue-500 p-3   rounded  hover:bg-blue-900 text-stone-50 flex justify-center items-center ml-11"
            >
              <LinkedinLogo size={28} />
              Linkedin
            </a>
          </div>
        </div>
        <div className="">
          <Icon />
        </div>
      </div>
    </div>
  );
}
