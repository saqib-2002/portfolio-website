import error404Img from "../assets/error/404_Pages.png";
import Heading from "./Heading";
import Section from "./Section";

const Error404 = () => {
    return (
        <Section id="features" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings className="-mt-[5.25rem] pt-[14rem]">
            <div className="flex flex-col justify-center text-center font-code">
                <Heading title="404 ERROR" className="h1" />
                <p className="h5 -mt-[5.25rem]">Page not found!</p>
            </div>
            <div className="flex container justify-center w-1/2 bg-n-2 py-6 mb-12 mt-12 rounded-md opacity-90">
                <img src={error404Img} alt="feg" />
            </div>
        </Section>
    )
}
export default Error404;