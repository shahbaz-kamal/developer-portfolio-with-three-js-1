import Button from "@/components/Button";
import HeroExperience from "@/components/HeroModels/HeroExperience";
import { words } from "@/constants";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>
      <div className="relative z-10 xl:mt-20 mt-32 md:h-dvh h-[80vh] flex xl:items-center items-start justify-center">
        {/* left: Hero content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text flex flex-col justify-center md:text-[60px] text-[30px] font-semibold relative z-10 pointer-events-none">
              <h1>
                Shaping Designs
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span key={index} className="flex items-center md:gap-3 gap-1 pb-2">
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that delivers Results</h1>
            </div>
            <Button className="md:w-80 md:h-16 w-60 h-12" id="button" text="See My Work"></Button>
          </div>
        </header>

        {/* Right 3d Model */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience></HeroExperience>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
