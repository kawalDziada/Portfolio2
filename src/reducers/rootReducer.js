import Links from '../img/Links.png';
import Portfolio from '../img/Portfolio.png';
import Pagination from '../img/Pagination.png';
import Random from '../img/Random.png';

const initState = {
    projects: [
        {
            name: 'Links-App', 
            picture: Links, 
            description: 'Bookmark ReactJS application created to have easy access to important links or just to go back interesting website in spare time. The code is written in ReactJS for authentication and data storage I used firebase.',
            adress: 'https://github.com/kawalDziada/links-app',
            skills: ['JavaScript ES6', 'ReactJS', 'Redux', 'Firebase'], 
            id: '1'
        },
        {
            name: 'Portfolio', 
            picture: Portfolio, 
            description: 'My first website launched website presenting my work in a visually appealing way. During the work over this project, I learned how to manipulate the DOM using jquery and how to design website layout in a mobile-first principle.', 
            adress: 'https://github.com/kawalDziada/Portfolio',
            skills: ['Responsive web design', 'jquery', 'npm', 'SVG'],
            id: '2'
        },
        {
            name: 'Pagination-Content-Filter', 
            picture: Pagination, 
            description: 'It was a lesson about how to organize content on a webpage efficiently and also occasion to practice functional programing. I had a chance to collaborate with my peers on a dedicated slack channel and learn how to use a version control system.', 
            adress: 'https://github.com/kawalDziada/Pagination-Content-Filter',
            skills: ['JavaScript', 'HTML', 'CSS', 'Git'],
            id: '3'},
        {
            name: 'Random-Quote-Generator', 
            picture: Random, 
            description: 'Application iterating over a list of quotes from famous writers. My first attempts working with data structures like arrays and object and manipulating them using loops and functions.', 
            adress: 'https://github.com/kawalDziada/Random-Quote-Generator',
            skills: ['JavaScript', 'HTML', 'CSS', 'Git'],
            id: '4'
        }
      ]
}

const rootReducer = (state = initState) => {
    return state
}

export default rootReducer