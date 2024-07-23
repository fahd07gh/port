import SectionTitle from "@/components/SectionTitle";
import AboutSection from "@/components/AboutSection";
import SocialMedia from "@/components/SocialMedia";

export default function About() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <section className="">
      <SectionTitle title="ABOUT" />
      <div className="px-2">
        <p>
          A self-taught UI/UX designer, functioning in the industry for 3+ years
          now. I make meaningful and delightful digital products that create an
          equilibrium between user needs and business goals.
        </p>
        <AboutSection
          title="Education"
          data={[
            "BSc in Computer Science",
            "MSc in Computer Science",
            "PhD in Computer Science",
          ]}
        />
        <AboutSection
          title="Skills"
          data={[
            "UI/UX Design",
            "Frontend Development",
            "Product Design",
            "User Research",
            "Prototyping",
            "Wireframing",
            "Design Systems",
            "Design Thinking",
            "User Testing",
            "Interaction Design",
          ]}
        />
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
