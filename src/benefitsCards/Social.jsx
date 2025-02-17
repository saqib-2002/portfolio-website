import { socials } from "../constants";

const Social = () => {
  return (
    <ul className="flex flex-wrap gap-5">
      {socials.map((item) => (
        <a
          key={item.id}
          href={item.url}
          target="_blank"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-n-7 transition-colors hover:bg-n-6"
        >
          <img src={item.iconUrl} alt={item.title} width={16} height={16} />
        </a>
      ))}
    </ul>
  );
};
export default Social;
