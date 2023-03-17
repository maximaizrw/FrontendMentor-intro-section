import HeroDesktop from "../assets/images/image-hero-desktop.png";
import HeroMobile from "../assets/images/image-hero-mobile.png";
import ClientAudio from "../assets/images/client-audiophile.svg";
import ClientData from "../assets/images/client-databiz.svg";
import ClientMaker from "../assets/images/client-maker.svg";
import ClientMeet from "../assets/images/client-meet.svg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="md:px-8 w-full">
      <div className="flex flex-col-reverse md:flex-row gap-x-8">
        <div className="md:p-16 p-4 flex flex-col md:items-start justify-between gap-y-14 items-center">
          <h1 className="md:text-[4rem] text-4xl font-bold leading-tight  text-neutral-almost-black">
            Make remote work{" "}
          </h1>
          <p className="text-neutral-medium-gray md:pr-40 text-center md:text-left">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="bg-neutral-almost-black text-neutral-almost-white py-3 px-4 rounded-lg hover:bg-neutral-almost-white hover:text-neutral-almost-black border-2 border-neutral-almost-black">
            Learn more
          </button>
          <div className="flex  justify-between w-full  ">
            <img src={ClientAudio} className="h-4 md:h-8 object-contain" />
            <img src={ClientData} className="h-4 md:h-8 object-contain" />
            <img src={ClientMaker} className="h-4 md:h-8 object-contain" />
            <img src={ClientMeet} className="h-4 md:h-8 object-contain" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={isMobile ? HeroMobile : HeroDesktop}
            alt="hero"
            className="md:w-[60%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
