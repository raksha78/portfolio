import flysapoVideo from './images/flysapo.mov';
import portfolioVideo from './images/portfolio.mov';
import stickiesVideo from './images/stickies.mov';
import chatVideo from './images/chat.mov';
import wordgameVideo from './images/word-guess.mov';


export const headerItems = ['/portfolio/Projects', '/portfolio/About', '/portfolio/Contact'];

export const footerItems = ['linkedIn'];

export const resumeLink = "https://docs.google.com/document/d/1Xt6JBZhwX61cAITw7adNGqf0mbxArxva/edit?usp=sharing&ouid=102917169289525932659&rtpof=true&sd=true";

export const linkedIn = "https://www.linkedin.com/in/rakshitha-gururaj/";

export const githubLink = "https://github.com/raksha78/";


export const experience = [
    {
        role: 'Graduate Teaching Assistant',
        course: 'INFO6250 Web Development: Tools and Methods',
        organization: 'Northeastern University',
        date: 'Spring 2024 - Present'
    },
    {
        role: 'Graduate Teaching Assistant',
        course: 'INFO6150 Web Design and User Experience Engineering',
        organization: 'Northeastern University',
        date: 'Fall 2023'
    },
    {
        role: 'Software Engineer in Automation',
        organization: 'JFrog',
        date: 'November 2020 - September 2022'
    },
    {
        role: 'Software Engineer',
        organization: 'Leanovate Info Solutions',
        date: 'August 2019 - September 2020'
    },
    {
        role: 'Co-founder',
        organization: 'HabbaOnline',
        date: 'August 2020 - Present'
    },
]

export const projects = [
    {
        title: 'FlySapo',
        role: ['UI/UX Designer'],
        description: '"FLYSAPO - Tailored Flights for Every Crew!" revolutionizes air travel with personalized experiences for all, including elderly, infants, pets, and more. Passengers customize seating, meals, and amenities to elevate comfort and satisfaction, ensuring a seamless journey for every traveler. Key features include dynamic group aggregation and location pinning with flight alerts',
        techStack: [],
        link: 'https://www.figma.com/proto/cwD6Fl2LZDeU7iOADlK2nC/FlySapo?page-id=0%3A1&type=design&node-id=239-2278&viewport=914%2C416%2C0.06&t=QS2YUDICUKU8tBj5-1&scaling=scale-down&mode=design',
        videoLink: flysapoVideo,
        view: 'View on Figma',
        className: 'figma-video',
        background: 'fad3cf',
    },
    {
        title: 'Portfolio',
        role: ['UI/UX Designer', 'Full-stack Engineer'],
        description: `This sleek ReactJS website showcases my web development projects and skills. Explore my accomplishments and delve into UI/UX design for a seamless user experience. From concept to implementation, I prioritize visually appealing and user-centric designs, reflecting my passion and expertise`,
        techStack: ['express', 'javascript', 'HTML', 'css', 'react'],
        link: 'https://github.com/raksha78/portfolio',
        videoLink: portfolioVideo,
        background: 'cadefc',
    },
    {
        title: 'Stickies Manager',
        role: ['UI/UX Designer', 'Full-stack Engineer'],
        description: `Stickies Manager is a dynamic web app for efficient todos and notes management. Using React.js for frontend and Vanilla.js and Express.js for backend, it ensures a seamless UX. With user authentication and authorization levels, it offers secure access. Employing polling for real-time updates and UI interactions with state management, Stickies Manager enhances productivity and organization.`,
        techStack: ['express', 'javascript', 'HTML', 'css', 'react'],
        link: 'https://github.com/raksha78/stickies-manager',
        videoLink: stickiesVideo,
        background: 'bbe9db',
    },
    {
        title: 'Web Chat',
        role: ['Front-end Engineer'],
        description: `Web Chats is a Single Page Application (SPA) facilitating real-time messaging functionalities akin to a chat forum. Built with JavaScript, it interacts with RESTful services via Express, fetch API, and manages persistent state on server and client sides. Authentication, authorization, and Redis caching enhance performance and responsiveness, ensuring an optimal user experience`,
        techStack: ['express', 'javascript', 'HTML', 'css', 'webpack', 'babel', 'redis'],
        link: 'https://github.com/raksha78/web-chat',
        videoLink: chatVideo,
        background: 'dcd6f7',
    },
    {
        title: 'Guess the word',
        role: ['UI/UX Designer', 'Front-end Engineer'],
        description: `The web-based word guessing game project blends backend logic and frontend presentation seamlessly. Utilizing only backend-generated HTML, it employs Vanilla.js and Express.js for game logic, authentication, and session management. Users enjoy thrilling word-guessing adventures with secret words and multiple turns, ensuring a captivating and secure gaming experience`,
        techStack: ['express', 'javascript', 'HTML', 'css'],
        link: 'https://github.com/raksha78/word-guessing-game',
        videoLink: wordgameVideo,
        background: 'fdfdcb',
    }
]