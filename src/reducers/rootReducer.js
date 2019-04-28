import Links from "../img/Links.png";
import Portfolio from "../img/Portfolio.png";
import Pagination from "../img/Pagination.png";
import Random from "../img/Random.png";
import Diary from "../img/Diary.png";
import Andzelika from "../img/Andzelika.png";

const initState = {
  projects: [
    {
      name: "Teacher",
      picture: Andzelika,
      description:
        "Future website of the best teacher in the world. For now, it is just a skeleton but I won't take me a long time to transform it into a beautiful and snappy website for freelancer. It already has custom SVG graphics and nice fade-in effects and responsive design.",
      adress: "https://github.com/kawalDziada/diary",
      skills: ["JavaScript ES6", "ReactJS", "Bootstrap", "SVG"],
      id: "2"
    },
    {
      name: "Diary",
      picture: Diary,
      description:
        "Web application enabling users to share their post with each other. To log in and authenticate I used firebase. On a front-end, I took advantage of Redux to manage state.",
      adress: "https://github.com/kawalDziada/diary",
      skills: [
        "JavaScript ES6",
        "ReactJS",
        "Redux",
        "Firebase",
        "Materializecss"
      ],
      id: "2"
    },
    {
      name: "Links-App",
      picture: Links,
      description:
        "Bookmark ReactJS application created to have easy access to important links or just to go back interesting website in spare time. The code is written in ReactJS for authentication and data storage I used firebase.",
      adress: "https://github.com/kawalDziada/links-app",
      skills: ["JavaScript ES6", "ReactJS", "Redux", "Firebase"],
      id: "3"
    },
    {
      name: "Portfolio",
      picture: Portfolio,
      description:
        "My first website launched website presenting my work in a visually appealing way. During the work over this project, I learned how to manipulate the DOM using jquery and how to design website layout in a mobile-first principle.",
      adress: "https://github.com/kawalDziada/Portfolio",
      skills: ["Responsive web design", "jquery", "npm", "SVG"],
      id: "4"
    },
    {
      name: "Pagination-Content-Filter",
      picture: Pagination,
      description:
        "It was a lesson about how to organize content on a webpage efficiently and also occasion to practice functional programing. I had a chance to collaborate with my peers on a dedicated slack channel and learn how to use a version control system.",
      adress: "https://github.com/kawalDziada/Pagination-Content-Filter",
      skills: ["JavaScript", "HTML", "CSS", "Git"],
      id: "5"
    },
    {
      name: "Random-Quote-Generator",
      picture: Random,
      description:
        "Application iterating over a list of quotes from famous writers. My first attempts working with data structures like arrays and object and manipulating them using loops and functions.",
      adress: "https://github.com/kawalDziada/Random-Quote-Generator",
      skills: ["JavaScript", "HTML", "CSS", "Git"],
      id: "6"
    }
  ]
};

const rootReducer = (state = initState) => {
  return state;
};

export default rootReducer;
