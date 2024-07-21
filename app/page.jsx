import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const Logo = () => (
    <svg
      width="398"
      height="354"
      viewBox="0 0 398 354"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M197.362 353.553C196.91 353.464 196.458 353.317 196.012 353.109L3.5861 263.037C1.40643 262.017 -1.10261e-07 259.727 0 257.2L3.01861e-06 188.002L126.094 128.979L104.631 118.932L104.631 131.047C104.631 133.575 103.225 135.865 101.045 136.885L68.5516 152.089V102.044L56.5469 96.4246C52.572 94.5641 48.1064 97.6524 48.1064 102.262V157.5C48.1064 160.028 46.6998 162.317 44.52 163.338L3.1856e-06 184.174L1.12198e-05 6.38719C1.12198e-05 1.77774 4.46568 -1.31059 8.4405 0.549931L199.365 89.9192L389.56 0.891374C393.534 -0.96915 398 2.11918 398 6.72863V184.515L353.48 163.679C351.3 162.659 349.894 160.369 349.894 157.842V102.603C349.894 97.9938 345.428 94.9055 341.453 96.766L329.448 102.385V152.43L296.956 137.226C294.775 136.206 293.369 133.917 293.369 131.389V119.274L271.906 129.32L398 188.343V257.541C398 260.069 396.594 262.358 394.414 263.378L201.988 353.45C200.421 354.184 198.778 354.148 197.362 353.553ZM198.607 168.195L154.702 187.264V262.096L199.393 281.506L243.298 262.438L243.298 187.605L198.607 168.195ZM68.5516 224.68L106.997 241.377V207.983L68.5516 224.68ZM329.448 225.021L291.003 241.719V208.324L329.448 225.021Z"
        fill="#fff"
      />
    </svg>
  );

  const SectionTitle = ({ title }) => (
    <div
      id={title}
      className="bg-accent h-10 text-3xl flex flex-row justify-between items-center p-2 px-5 font-black mt-7 mb-4 col-span-full"
    >
      {title.split("").map((lettr, index) => (
        <h2 key={index} className="opacity-50">
          {lettr}
        </h2>
      ))}
    </div>
  );

  const Card = ({ title, description, Image }) => (
    <Link
      href={`project/${title.toLowerCase()}`}
      className="bg-secondary p-2 rounded-lg shadow-lg cursor-pointer"
    >
      <img
        src={Image}
        alt={title}
        className="w-full rounded-md border aspect-video grayscale-[100%] hover:grayscale-0 "
      />
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="line-clamp-2">{description}</p>
    </Link>
  );

  const Skills = ({ title, arr }) => (
    <div className="my-5">
      <h2 className="px-2 bg-accent text-2xl font-bold w-fit rounded-md mb-3">
        {title}
      </h2>
      <div className="flex flex-row flex-wrap gap-2 px-2">
        {arr.map((skill, index) => (
          <div key={index} className="bg-secondary p-2 rounded-lg ">
            <h3 className="text-base font-bold">{skill}</h3>
          </div>
        ))}
      </div>
    </div>
  );

  // wait 5 seconds before return
  // await new Promise((resolve) => setTimeout(resolve, 500));

  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center">
        <Logo />
        <Link href="#ABOUT">
          <svg
            className="cursor-pointer absolute bottom-5 animate-bounce duration-200 delay-300"
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2L9.07107 9.07107L16.1421 2"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </Link>
      </section>

      <section className="">
        <SectionTitle title="ABOUT" />
        <div className="px-2">
          <p>
            A self-taught UI/UX designer, functioning in the industry for 3+
            years now. I make meaningful and delightful digital products that
            create an equilibrium between user needs and business goals.
          </p>
          <Skills
            title="Education"
            arr={[
              "BSc in Computer Science",
              "MSc in Computer Science",
              "PhD in Computer Science",
            ]}
          />
          <Skills
            title="Skills"
            arr={[
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
      </section>

      <section>
        <SectionTitle title="PROJECT" />
        <div className="grid grid-cols-3 gap-5 px-2">
          <Card
            Image="https://picsum.photos/177/100?grayscale"
            title="Portfolio"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quasi nobis similique deleniti. Placeat, error quod unde doloremque rerum quia consequatur culpa magnam autem illo? Veritatis quidem reiciendis repudiandae a."
          />
          <Card
            Image="https://picsum.photos/177/100?grayscale"
            title="Portfolio"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quasi nobis similique deleniti. Placeat, error quod unde doloremque rerum quia consequatur culpa magnam autem illo? Veritatis quidem reiciendis repudiandae a."
          />
          <Card
            Image="https://picsum.photos/177/100?grayscale"
            title="Portfolio"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quasi nobis similique deleniti. Placeat, error quod unde doloremque rerum quia consequatur culpa magnam autem illo? Veritatis quidem reiciendis repudiandae a."
          />
          <Card
            Image="https://picsum.photos/177/100"
            title="Portfolio"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quasi nobis similique deleniti. Placeat, error quod unde doloremque rerum quia consequatur culpa magnam autem illo? Veritatis quidem reiciendis repudiandae a."
          />
          <Card
            Image="https://picsum.photos/177/100"
            title="Portfolio"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quasi nobis similique deleniti. Placeat, error quod unde doloremque rerum quia consequatur culpa magnam autem illo? Veritatis quidem reiciendis repudiandae a."
          />
          <Card
            Image="https://picsum.photos/177/100"
            title="Portfolio"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quasi nobis similique deleniti. Placeat, error quod unde doloremque rerum quia consequatur culpa magnam autem illo? Veritatis quidem reiciendis repudiandae a."
          />
        </div>
      </section>
      <section className="mb-10">
        <SectionTitle title="CONTACT" />
        <div className="p-3">
          <form action="" className="bg-accent w-full rounded-xl px-3">
            <Field name="Name" />
            <Field name="Email" />
            <Field name="Message" />
            <button className="bg-button h-10 w-full px-3 mb-2">Message</button>
          </form>
        </div>
        <div className="flex flex-row gap-2 justify-center items-stretch">
          <div className="bg-secondary hover:bg-secondary/60 p-2 flex justify-center items-center rounded-md cursor-pointer">
            <Instagram />
          </div>
          <div className="bg-secondary hover:bg-secondary/60 p-2 flex justify-center items-center rounded-md cursor-pointer">
            <Linkedin />
          </div>
          <div className="bg-secondary hover:bg-secondary/60 p-2 flex justify-center items-center rounded-md cursor-pointer">
            <Github />
          </div>
          <div className="bg-secondary hover:bg-secondary/60 p-2 flex justify-center items-center rounded-md cursor-pointer">
            <Twitter />
          </div>
          <div className="bg-secondary hover:bg-secondary/60 p-2 flex justify-center items-center rounded-md cursor-pointer">
            <Email />
          </div>
        </div>
      </section>
    </>
  );
}
const Field = ({ name }) => {
  return (
    <div className="flex flex-col  mb-2">
      <label htmlFor={name} className="text-2xl px-3">
        {name}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        className="h-10 bg-secondary rounded-lg px-2 text-lg focus:bg-none"
      />
    </div>
  );
};

const Instagram = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.46878 1.87512C3.48406 1.87512 1.87512 3.48406 1.87512 5.46878V14.5312C1.87512 16.5159 3.48406 18.1249 5.46878 18.1249H14.5312C16.5159 18.1249 18.1249 16.5159 18.1249 14.5312V5.46878C18.1249 3.48406 16.5159 1.87512 14.5312 1.87512H5.46878ZM0 5.46878C0 2.44846 2.44846 0 5.46878 0H14.5312C17.5515 0 20 2.44846 20 5.46878V14.5312C20 17.5515 17.5515 20 14.5312 20H5.46878C2.44846 20 0 17.5515 0 14.5312V5.46878ZM10.4347 7.30386C9.87559 7.22094 9.30454 7.31645 8.8028 7.57679C8.30106 7.83714 7.89419 8.24906 7.64005 8.75397C7.38591 9.25888 7.29746 9.83107 7.38726 10.3892C7.47706 10.9472 7.74055 11.4628 8.14025 11.8625C8.53995 12.2622 9.05551 12.5257 9.61359 12.6155C10.1717 12.7053 10.7439 12.6168 11.2488 12.3627C11.7537 12.1086 12.1656 11.7017 12.426 11.1999C12.6863 10.6982 12.7818 10.1272 12.6989 9.56801C12.6143 8.99765 12.3485 8.46963 11.9408 8.06192C11.5331 7.65421 11.0051 7.38844 10.4347 7.30386ZM7.93917 5.91239C8.791 5.4704 9.7605 5.30825 10.7098 5.44902C11.6781 5.59261 12.5746 6.04382 13.2667 6.736C13.9589 7.42819 14.4101 8.32465 14.5537 9.29296C14.6945 10.2422 14.5324 11.2117 14.0904 12.0636C13.6484 12.9154 12.949 13.6062 12.0918 14.0376C11.2346 14.4691 10.2632 14.6193 9.31569 14.4668C8.36821 14.3143 7.49293 13.867 6.81434 13.1884C6.13575 12.5098 5.68841 11.6345 5.53595 10.6871C5.38349 9.73957 5.53367 8.76814 5.96512 7.91093C6.39658 7.05372 7.08735 6.35439 7.93917 5.91239ZM14.9859 4.07877C14.4681 4.07877 14.0484 4.49853 14.0484 5.01633C14.0484 5.53413 14.4681 5.9539 14.9859 5.9539H14.9943C15.5121 5.9539 15.9318 5.53413 15.9318 5.01633C15.9318 4.49853 15.5121 4.07877 14.9943 4.07877H14.9859Z"
      fill="white"
    />
  </svg>
);
const Linkedin = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.3996 0.00179426H1.71246C1.49737 -0.0082825 1.28241 0.0241583 1.07988 0.0972598C0.877343 0.170361 0.691217 0.282688 0.532154 0.427809C0.37309 0.572931 0.244212 0.747997 0.152898 0.942987C0.0615838 1.13798 0.00962621 1.34906 0 1.56415V18.2877C0.0126001 18.7378 0.197064 19.1661 0.515522 19.4845C0.833981 19.8029 1.26227 19.9874 1.71246 20H18.3996C18.8372 19.9805 19.2498 19.7903 19.5489 19.4702C19.848 19.1501 20.0098 18.7256 19.9995 18.2877V1.56415C20.0031 1.3548 19.9639 1.14693 19.8843 0.953274C19.8046 0.759622 19.6863 0.584274 19.5365 0.437984C19.3867 0.291695 19.2086 0.177547 19.0131 0.102542C18.8176 0.0275356 18.6088 -0.00674778 18.3996 0.00179426ZM6.24986 16.6753H3.33742V7.7636H6.24986V16.6753ZM4.86239 6.41372C4.65915 6.4208 4.45665 6.38578 4.2676 6.31086C4.07854 6.23594 3.90703 6.12274 3.76382 5.97837C3.62061 5.834 3.50881 5.66157 3.43543 5.47193C3.36205 5.28228 3.32868 5.07951 3.33742 4.87636C3.32844 4.67101 3.36248 4.46604 3.43736 4.27462C3.51224 4.08319 3.62631 3.90953 3.77225 3.76478C3.91819 3.62002 4.09278 3.50737 4.28482 3.43405C4.47686 3.36072 4.6821 3.32835 4.88739 3.33899C5.09062 3.33191 5.29313 3.36693 5.48218 3.44185C5.67123 3.51677 5.84275 3.62997 5.98596 3.77434C6.12916 3.91872 6.24097 4.09114 6.31435 4.28079C6.38773 4.47043 6.42109 4.6732 6.41235 4.87636C6.42134 5.08171 6.3873 5.28667 6.31242 5.47809C6.23754 5.66952 6.12347 5.84318 5.97752 5.98793C5.83158 6.13269 5.65699 6.24534 5.46496 6.31867C5.27292 6.39199 5.06767 6.42437 4.86239 6.41372ZM16.6746 16.6753H13.7497V11.8007C13.7497 10.6383 13.3372 9.83841 12.2997 9.83841C11.9774 9.84121 11.6639 9.94361 11.4021 10.1316C11.1402 10.3195 10.943 10.5839 10.8373 10.8883C10.756 11.1166 10.722 11.359 10.7373 11.6008V16.6753H7.86232V7.7636H10.7373V9.01349C10.9929 8.54395 11.3733 8.1542 11.8365 7.88731C12.2998 7.62041 12.8278 7.48676 13.3622 7.50112C15.2497 7.50112 16.6746 8.75101 16.6746 11.4133V16.6753Z"
      fill="white"
    />
  </svg>
);
const Github = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 0C4.475 0 0 4.58819 0 10.2529C0 14.7899 2.8625 18.6219 6.8375 19.9804C7.3375 20.0701 7.525 19.7625 7.525 19.4934C7.525 19.2499 7.5125 18.4425 7.5125 17.5838C5 18.058 4.35 16.9558 4.15 16.3791C4.0375 16.0843 3.55 15.1743 3.125 14.9308C2.775 14.7386 2.275 14.2644 3.1125 14.2516C3.9 14.2388 4.4625 14.9949 4.65 15.3025C5.55 16.8533 6.9875 16.4175 7.5625 16.1484C7.65 15.4819 7.9125 15.0334 8.2 14.777C5.975 14.5207 3.65 13.6364 3.65 9.71466C3.65 8.59965 4.0375 7.67689 4.675 6.95918C4.575 6.70286 4.225 5.65193 4.775 4.24215C4.775 4.24215 5.6125 3.97301 7.525 5.29308C8.325 5.06239 9.175 4.94704 10.025 4.94704C10.875 4.94704 11.725 5.06239 12.525 5.29308C14.4375 3.9602 15.275 4.24215 15.275 4.24215C15.825 5.65193 15.475 6.70286 15.375 6.95918C16.0125 7.67689 16.4 8.58684 16.4 9.71466C16.4 13.6492 14.0625 14.5207 11.8375 14.777C12.2 15.0975 12.5125 15.7126 12.5125 16.6738C12.5125 18.0452 12.5 19.1474 12.5 19.4934C12.5 19.7625 12.6875 20.0829 13.1875 19.9804C15.1728 19.2935 16.8979 17.9854 18.12 16.2403C19.3421 14.4953 19.9997 12.4012 20 10.2529C20 4.58819 15.525 0 10 0Z"
      fill="white"
    />
  </svg>
);
const Twitter = () => (
  <svg
    width="20"
    height="18"
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.2825 17.261C13.83 17.261 17.9587 10.903 17.9587 5.39902C17.9587 5.2211 17.9588 5.04065 17.9513 4.86273C18.7551 4.27114 19.4488 3.53871 20 2.69977C19.2491 3.03635 18.4535 3.25818 17.6388 3.35806C18.4969 2.83656 19.1397 2.01602 19.4475 1.04895C18.6412 1.53457 17.7588 1.87547 16.8387 2.05672C16.2202 1.38702 15.4018 0.943368 14.5101 0.794476C13.6185 0.645585 12.7034 0.799768 11.9067 1.23314C11.1099 1.66652 10.476 2.3549 10.1031 3.19166C9.73012 4.02841 9.63897 4.96685 9.84375 5.86161C8.21218 5.77843 6.61602 5.34751 5.1588 4.5968C3.70159 3.84608 2.41586 2.79234 1.385 1.50391C0.861675 2.42283 0.701967 3.5098 0.938308 4.54409C1.17465 5.57838 1.78932 6.48245 2.6575 7.07271C2.00692 7.05024 1.37065 6.87263 0.8 6.55421V6.6114C0.801122 7.57403 1.12913 8.50675 1.72859 9.25189C2.32805 9.99703 3.16218 10.5089 4.09 10.7009C3.73783 10.7996 3.37404 10.8488 3.00875 10.8471C2.75123 10.8479 2.49423 10.8236 2.24125 10.7747C2.50348 11.6033 3.01409 12.3278 3.70156 12.8467C4.38903 13.3656 5.21892 13.6529 6.075 13.6683C4.62069 14.8296 2.82425 15.4595 0.975 15.4564C0.649151 15.4578 0.323529 15.4387 0 15.3992C1.87689 16.6157 4.05662 17.2617 6.2825 17.261V17.261Z"
      fill="white"
    />
  </svg>
);
const Email = () => (
  <svg
    width="20"
    height="16"
    viewBox="0 0 20 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.0625 2.52398C0.188523 1.97978 0.498319 1.49389 0.941152 1.14588C1.38398 0.797867 1.93361 0.608361 2.5 0.608398H17.5C18.0664 0.608361 18.616 0.797867 19.0588 1.14588C19.5017 1.49389 19.8115 1.97978 19.9375 2.52398L10 8.5097L0.0625 2.52398ZM0 3.93079V12.6821L7.25375 8.29905L0 3.93079ZM8.45125 9.02217L0.23875 13.983C0.441658 14.4046 0.761908 14.7608 1.16223 15.0101C1.56255 15.2594 2.02647 15.3915 2.5 15.391H17.5C17.9735 15.3911 18.4372 15.2587 18.8373 15.0092C19.2374 14.7597 19.5574 14.4034 19.76 13.9817L11.5475 9.02093L10 9.95347L8.45125 9.02093V9.02217ZM12.7462 8.30028L20 12.6821V3.93079L12.7462 8.29905V8.30028Z"
      fill="white"
    />
  </svg>
);
