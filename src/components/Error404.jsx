import error404Img from "../assets/error/404_Pages.png";
import Heading from "./Heading";

const Error404 = () => {
  return (
    <section id="features" className="-mt-[5.25rem] pt-[14rem]">
      <div className="flex flex-col justify-center text-center font-code">
        <Heading title="404 ERROR" className="h1" />
        <p className="h5 -mt-[5.25rem]">Page not found!</p>
      </div>
      <div className="container mb-12 mt-12 flex w-1/2 justify-center rounded-md bg-n-2 py-6 opacity-90">
        <img src={error404Img} alt="feg" />
      </div>
    </section>
  );
};
export default Error404;
