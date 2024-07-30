"use client";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
export default async function Card({ title, description, image, slug }) {
  return (
    <Link
      href={`project/${slug}`}
      className="bg-secondary p-2 rounded-lg shadow-lg cursor-pointer"
    >
      <Image
        src={
          image
            ? urlFor(image).width(600).height(450).quality(100).url()
            : "./logo.svg"
        }
        placeholder="blur"
        blurDataURL={image?.metadata?.lqip || "./logo.svg"}
        alt={title}
        className="w-full rounded-md border aspect-video grayscale-[100%] hover:grayscale-0"
        width={600}
        height={450}
      />
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="line-clamp-2">{description}</p>
    </Link>
  );
}
