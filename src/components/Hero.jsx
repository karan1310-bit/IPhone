import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {

    const [ videoSrc, setVideoSrc ] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

    const handleVideoSrcSet = () => {
        if(window.innerWidth < 760){
            setVideoSrc(smallHeroVideo)
        } else {
            setVideoSrc(heroVideo)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleVideoSrcSet);

        return () => {
            window.removeEventListener('resize', handleVideoSrcSet)
        }
    },[])

    useGSAP(() => {
        gsap.to("#hero", {
            opacity: 1,
            delay: 2,
        })
    },[])
    
    useGSAP(() => {
        gsap.to("#cta",{
            y:-50,
            opacity: 1,
            delay: 2,
        })
    },[])

  return (
    <section className="w-full nav-height bg-black relative overflow-hidden">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">iPhone 16 Pro</p>

        <div className="md:w-10/12 w-9/12">
        <video className="pointers-events-none" autoPlay muted playsInline={true} key={videoSrc} >
            <source src={videoSrc} type="video/mp4" />
        </video>
        </div>
      </div>

      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="#highlights" className="btn">Buy</a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
