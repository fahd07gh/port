import Link from "next/link";

export default function Card({ title, description, Image }) {
  return (
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
}
