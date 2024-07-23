import Card from "@/components/card";
import SectionTitle from "@/components/SectionTitle";
import React from "react";

export default function Project() {
  return (
    <section>
      <SectionTitle title="PROJECT" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-2">
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
  );
}
