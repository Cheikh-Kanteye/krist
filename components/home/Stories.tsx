import { storiesData } from "@/constants";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { RiInstagramLine } from "react-icons/ri";

interface StoryCardProps extends ImageProps {
  href: string;
}

const StoryCard = ({ href, alt, ...rest }: StoryCardProps) => {
  return (
    <Link href={href} className="story-card">
      <Image
        alt={alt}
        {...rest}
        width={500}
        height={100}
        className="absolute -top-8  object-fill w-full h-auto -z-10"
      />
      <div className="story-overlay">
        <RiInstagramLine
          size={48}
          color="black"
          className="p-2 aspect-square bg-white rounded-full"
        />
      </div>
    </Link>
  );
};

const Stories = () => {
  return (
    <section className="grid-container pt-12">
      <h2 className="section-title text-center">Our Instagram Stories</h2>
      <div className="py-6 overflow-hidden">
        <div className="grid-layout">
          {storiesData.map((story, index) => (
            <StoryCard
              key={index}
              src={story.src}
              alt={story.alt}
              href={story.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;
