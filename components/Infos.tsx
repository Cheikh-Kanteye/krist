import { infoItems } from "@/constants";
import { IconType } from "react-icons";

const InfoItem = ({
  icon: Icon,
  title,
  description,
}: {
  icon: IconType;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center text-center sm:text-start sm:items-start">
      <Icon size={34} color="black" />
      <h5 className="text-lg lg:text-xl mt-3 text-black font-semibold">
        {title}
      </h5>
      <p className="text-sm lg:text-base text-black/70">{description}</p>
    </div>
  );
};

const Infos = () => {
  return (
    <section className="pb-12 bg-white">
      <div className="grid-container grid grid-cols-2 sm:flex flex-wrap sm:justify-between gap-4">
        {infoItems.map((item, index) => (
          <InfoItem
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Infos;
