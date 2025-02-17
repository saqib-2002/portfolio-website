import { heroBackground, saqib } from "../assets";
import { Gradient } from "./design/Hero";

const ProfileImg = () => {
  return (
    <>
      <div className="relative z-1 rounded-2xl bg-conic-gradient p-0.5">
        <div className="relative rounded-[1rem] bg-n-8">
          <div className="h-[1rem] rounded-t-[0.9rem] bg-n-8"></div>
          <div className="aspect-[23/42] overflow-hidden rounded-b-[0.9rem] md:aspect-[688/900] lg:aspect-[1480/1720]">
            <img
              src={saqib}
              className="md:--translate-y-[10%] w-full translate-y-[20%] scale-[1.7] md:scale-[1] lg:-translate-y-[10%]"
              width={1024}
              height={490}
              alt="saqib"
            />
            {/* <ScrollParallax isAbsolutelyPositioned>
                  <ul className="absolute -left-[20rem] bottom-[4rem] hidden rounded-2xl border border-n-1/10 bg-n-9/40 px-1 py-1 backdrop-blur xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax> */}
          </div>
        </div>
        <Gradient />
      </div>

      {/* background robot image*/}
      <div className="absolute -top-[20%] left-1/2 w-[100%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[40%]">
        <img
          src={heroBackground}
          className="w-full"
          width={1440}
          height={1800}
          alt="hero"
        />
      </div>
    </>
  );
};
export default ProfileImg;
