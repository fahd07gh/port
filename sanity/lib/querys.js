import { client } from "@/sanity/lib/client";

export async function getAbout() {
  return client.fetch(
    `*[_type == "about" && language == "ar"][0]{
        header,
        language,
        skills,
        education,
      }`
  );
}

export async function getProjects() {
  return client.fetch(
    `*[_type == "project"]{
        language,        
        title,
        "slug": slug.current,
        description,
        "image": image.asset->{
        ...,
        metadata {lqip},
        },
        tags,
        body,
        }`
  );
}

export async function getProject(slug) {
  return client.fetch(`*[_type == "project" && slug.current == $slug][0]`, {
    slug,
  });
}

// {
//   title,
//   description,
//   "slug": slug.current,
//   "image": image.asset->{
//   ...,
//   metadata {lqip},
//   },
//   tags,
//   body,
//   content,
//   date,
//   }

// language,
// title,
// "slug": slug.current,
// description,
// "image": image.asset->{
// ...,
// metadata {lqip},
// },
// tags,
// body,
// date,
