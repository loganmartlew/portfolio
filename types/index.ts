export interface Project {
  name: string;
  description: string;
  imageUrl: string;
  links: Links;
}

export interface Links {
  live: string;
  github: string;
}
