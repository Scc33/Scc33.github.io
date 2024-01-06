interface IAmContent {
  name: string;
  description: string;
}

const iAm: IAmContent[] = [
  {
    name: "a front-end developer",
    description: "I have experience developing frontend applications with plain HTML/JS, React, and Svelte."
  },
  {
    name: "a back-end developer",
    description: "I have experience developing backend microservices with Spring Boot and Node.js."
  },
  {
    name: "a student",
    description:
      "While working full-time, I am also pursuing my Master of Computer Science from the University of Illinois Urbana-Champaign. Previously, I studied computer science and economics at the University of Illinois Urbana-Champaign."
  }
];

export default iAm;
