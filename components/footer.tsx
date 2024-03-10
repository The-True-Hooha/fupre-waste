import Image from "next/image";
import {
  PiFacebookLogoFill,
  PiInstagramLogo,
  PiInstagramLogoFill,
  PiLinkedinLogoFill,
  PiTwitterLogoFill,
  PiYoutubeLogoFill,
} from "react-icons/pi";

const Footer = () => {
  return (
    <div className=" flex lg:items-center pb-10 flex-col px-8 lg:px-0 xl:w-3/4 mx-auto 2xl:w-[55%] ">
      <div className="lg:flex lg:space-x-32 md:px-0 ">
        <div className="pt-4 flex items-center">
          <Image
            src="/assets/logo/fupre-waste_logo nobg.png"
            width={100}
            height={100}
            alt="logo"
            className=" w-10"
          />
          <div className="flex ml-4 space-x-2">
            <PiInstagramLogoFill className="text-2xl text-gray-500" />
            <PiTwitterLogoFill className="text-2xl text-gray-500" />
            <PiFacebookLogoFill className="text-2xl text-gray-500" />
            <PiYoutubeLogoFill className="text-2xl text-gray-500" />
            <PiLinkedinLogoFill className="text-2xl text-gray-500" />
          </div>
        </div>

        <div className="flex-col space-y-6 ">
          <div className="pt-10 font-medium">Education</div>
          <div className="font-light space-y-4 text-sm">
            <div>Professional Guidance</div>
            <div>Workshops</div>
            <div>Team Building</div>
            <div>Postgraduate Programs</div>
            <div>Login</div>
          </div>
        </div>

        <div className="flex-col space-y-6 flex ">
          <div className="pt-10 font-medium">Business</div>
          <div className="font-light space-y-4 text-sm">
            <div>Collaboration and Partnerships</div>
            <div>International Alliances</div>
            <div>Industry Partnerships</div>
            <div>Community Engagement</div>
          </div>
        </div>

        <div className="flex-col space-y-6 flex ">
          <div className="pt-10 font-medium">Ogranization</div>
          <div className="font-light space-y-4 text-sm">
            <div>Mission and Vision</div>
            <div>Goal Management</div>
            <div>Increase Productivity</div>
            <div>Work Management</div>
            <div>Project Planning</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
