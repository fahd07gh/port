import SectionTitle from "@/components/SectionTitle";
import AboutSection from "@/components/AboutSection";
import SocialMedia from "@/components/SocialMedia";
import { getAbout } from "@/sanity/lib/querys";

export default async function About() {
  const about = await getAbout();
  return (
    <section className="">
      <SectionTitle title="ABOUT" />
      <div className="px-2">
        <p className="font-semibold text-xl">{about.header}</p>
        <AboutSection title="Education" data={about.education} />
        <AboutSection title="Skills" data={about.skills} />
      </div>
      <div className="my-5">
        <h2 className="px-2 bg-accent text-2xl font-bold w-fit rounded-md mb-3">
          Social Media
        </h2>
        <div className="flex flex-row flex-wrap gap-2 px-2">
          <SocialMedia />
        </div>
      </div>
    </section>
  );
}
