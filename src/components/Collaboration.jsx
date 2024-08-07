import Section from "./Section";
import { collabApps, collabContent, collabTextRight } from "../constants";
import Button from "./Button";
import { brainwaveSymbol } from "../assets";
import { LeftCurve, RightCurve } from "./design/Collaboration"
const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
          Skills that I have learned
          </h2>
          <ul className="mb-10 max-w-[22rem] md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  {/* <img src={check} alt="check" width={24} height={24}/> */}
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 ml-8 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
          <Button>Connect now!</Button>
        </div>
        <div className="mt-4 lg:ml-auto xl:w-[38rem]">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mx-auto lg:mb-32 lg:w-[22rem]">
            {collabTextRight}
          </p>
          <div className="scale:75 relative left-1/2 flex aspect-square w-[20rem] -translate-x-1/2 rounded-full border border-n-6 md:scale-100" >
            <div className="m-auto flex aspect-square w-60 rounded-full border border-n-6">
              <div className="m-auto aspect-square w-[6rem] rounded-full bg-conic-gradient p-[0.2rem]">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-n-8">
                  <img
                    src={brainwaveSymbol}
                    alt="brainwave"
                    width={48}
                    height={48}
                  />
                </div>
              </div>
                      </div>
                      <ul>
                          {collabApps.map((app,index) => (
                              <li key={app.id} className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index*45}`}>
                                  <div className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index*45}`}>
                                      <img src={app.icon} alt={app.title} className="m-auto" width={app.width} height={app.height}/>
                                  </div>
                              </li>
                          ))}
                      </ul>
                      <LeftCurve />
                      <RightCurve/>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
