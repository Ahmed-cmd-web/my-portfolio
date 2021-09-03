/** @format */

const year = new Date();

const content = {
  myname: "Ahmed Said",
  headeropts: [
    {
      name: "skills",
      scrollto: "skills",
    },
    {
      name: "my projects",
      scrollto: "projects",
    },
    {
      name: "contact me",
      scrollto: "footer",
    },
  ],
  writer: [
    "am Ahmed.",
    "am a junior front-end dev.",
    `am ${year.getFullYear() - 2003} years old.`,
  ],
  briefdesc:
    "A passionate  developer for learning new tech and writing code,who has worked on some mindblowing projects for both web and mobile with    Javascript,React,React native,and  some other cool libraries and frameworks.",
  skill:
    "CRAZY Front-end/mobile DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  contacts: [
    {
      size: 30,
      icon: "faGithub",
      bg: "black",
      url: "https://github.com/Ahmed-cmd-web",
    },
    {
      icon: "faStackOverflow",
      size: 30,
      bg: "orange",
      url: "https://stackoverflow.com/users/16548676/ahmed-mcd-web",
    },
    {
      icon: "faGoogle",
      size: 30,
      bg: "red",
      url: "mailto:ahmeddragon700@gmail.com",
    },
  ],
  softwareskills: [
    {
      icon: "faHtml5",
      size: 30,
      name: "HTML5",
    },
    {
      icon: "faCss3Alt",
      size: 30,
      name: "CSS3",
    },
    {
      icon: "faJs",
      size: 30,
      name: "JAVASCRIPT",
    },
    {
      icon: "faReact",
      size: 30,
      name: "REACT",
    },
    {
      icon: "faBootstrap",
      size: 30,
      name: "BOOTSTRAP",
    },

    {
      icon: "faJava",
      size: 30,
      name: "JAVA",
    },
    {
      icon: "faHotjar",
      size: 30,
      name: "FIREBASE",
    },
    {
      icon: "faPython",
      size: 30,
      name: "PYTHON",
    },
    {
      icon: "faNpm",
      size: 30,
      name: "NPM",
    },
    {
      icon: "faYarn",
      size: 30,
      name: "YARN",
    },
  ],
  projects: [
    {
      name: "ebay clone ",
      techstack: ["reactjs", "redux", "firebase"],
      url: "https://github.com/Ahmed-cmd-web/ebay-clone",
    },
    {
      name: "disney+ clone",
      techstack: ["reactjs", "redux", "firebase"],
      url: "https://github.com/Ahmed-cmd-web/Disney-clone",
    },
    {
      name: "covid-19 tracker",
      techstack: ["reactjs", "redux", "disease.sh"],
      url: "https://github.com/Ahmed-cmd-web/Covid-tracker",
    },
    {
      name: "merchandise app",
      techstack: ["react-native", "react-context-api", "node.js"],
      url: "https://github.com/Ahmed-cmd-web/First-react-native-app",
    },
    {
      name: "netflix-clone",
      techstack: ["react-native", "redux", "tmdb"],
      url: "https://github.com/Ahmed-cmd-web/Netflix-clone",
    },
    {
      name: "whatsapp-clone",
      techstack: ["react-native", "redux", "firebase"],
      url: "https://github.com/Ahmed-cmd-web/Whatsapp-Clone",
    },
    {
      name: "my portfolio",
      techstack: ["reactjs", "tailwindcss"],
      url: "https://github.com/Ahmed-cmd-web/my-portfolio",
    },
  ],
};
export default content;
