import Image from "next/image";
import Link from "next/link";
import Card from "@/components/card";
import SectionTitle from "@/components/SectionTitle";
import SocialMedia from "@/components/SocialMedia";
import Home from "@/sections/Home";
import About from "@/sections/About";
import Project from "@/sections/Project";
import Contact from "@/sections/Contact";
import { Suspense } from "react";

export default async function pgae() {
  // wait 5 seconds before return
  // await new Promise((resolve) => setTimeout(resolve, 500));

  return (
    <>
      <Home />
      <About />
      <Project />
      <Contact />
    </>
  );
}
