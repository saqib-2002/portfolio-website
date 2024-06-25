import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
      Helping businesses create beautiful websites
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            key={index}
            className="flex h-[8.5rem] flex-1 items-center justify-center"
          >
            <img src={logo.title} alt={logo} width={42} height={28} />
            <p className="flex pointer-events-none pl-4">{ logo.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
