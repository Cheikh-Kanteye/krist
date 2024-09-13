import Link from "next/link";
import Image from "next/image";
import { Logo } from "./Logo";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { LuArrowRight, LuMail } from "react-icons/lu";
import {
  contactInfos,
  informationLinks,
  paymentMethods,
  serviceLinks,
} from "@/constants";
import InputField from "./ui/InputField";
import { FaXTwitter } from "react-icons/fa6";
import Infos from "./Infos";

const Footer = () => {
  return (
    <footer className="text-white pt-12">
      <Infos />
      <div className="bg-black pt-10">
        <div className="grid-container flex justify-between flex-wrap gap-4">
          <Section title="Contact">
            <Logo inverted />
            <ContactInfos />
          </Section>
          <Section title="Informations">
            <LinksList links={informationLinks} />
          </Section>
          <Section title="Services">
            <LinksList links={serviceLinks} />
          </Section>
          <Section title="Subscribe">
            <span className="text-white/70">
              Enter your email below to be the first to know about new
              collections and product launches.
            </span>
            <InputField
              label="Your Email"
              name="email"
              type="email"
              className="border-2 border-white px-3"
              inputClassName="focus:ring-0 focus:outline-none"
              iconLeft={LuMail}
              iconRight={LuArrowRight}
            />
          </Section>
        </div>
        <hr className="w-full h-px mt-6 bg-white/20 border-0" />
        <div className="grid-container py-6 flex flex-wrap justify-between items-center">
          <PaymentMethods />
          <p className="text-white/70">&copy;2023 Krist All Rights Reserved</p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="max-w-[20rem]">
    <p className="font-medium">{title}</p>
    <div className="flex flex-col gap-3 mt-4">{children}</div>
  </div>
);

const ContactInfos = () => (
  <>
    {contactInfos.map(({ icon: Icon, value }, index) => (
      <div key={index} className="flex gap-3 text-white/70">
        <Icon size={20} />
        <span className="text-pretty">{value}</span>
      </div>
    ))}
  </>
);

const LinksList = ({ links }: { links: { label: string; href: string }[] }) => (
  <>
    {links.map((item, index) => (
      <Link href={item.href} key={index}>
        <span className="text-white/70 text-pretty">{item.label}</span>
      </Link>
    ))}
  </>
);

const PaymentMethods = () => (
  <div className="flex items-center gap-3">
    {paymentMethods.map((src, index) => (
      <div
        key={index}
        className="h-8 w-12 grid place-items-center bg-white rounded-sm"
      >
        <Image
          src={src}
          alt="pay-method"
          width={32}
          height={32}
          className="h-6 w-auto"
        />
      </div>
    ))}
  </div>
);

const SocialLinks = () => (
  <div className="flex gap-4 text-white items-center">
    <Link href="">
      <FaFacebookF size={24} />
    </Link>
    <Link href="">
      <FiInstagram size={24} />
    </Link>
    <Link href="">
      <FaXTwitter size={24} />
    </Link>
  </div>
);

export default Footer;
