
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FadeIn } from '@/components/ui/fade-in';
import { CheckCircle, Code, GitBranch, LayoutTemplate, Lightbulb, Mail, MessageSquare, PlayCircle, Projector, Send, Server, Palette, Search, ExternalLink, HelpCircle, ClipboardCheck, Smartphone } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';


export const metadata: Metadata = {
    title: "Tech Training Programs | From Zero to Hero",
    description: "Explore our comprehensive training programs for Frontend, Backend, UI/UX Design, and SEO. Master in-demand skills with our hands-on, project-based curricula.",
    openGraph: {
        title: "Tech Training Programs | TechNext",
        description: "A complete roadmap to becoming a professional in your chosen tech field. Learn practical skills with our expert-guided learning paths.",
    },
};

const curriculums = {
    frontend: {
        "Weeks 1-2: Web Foundations": [
            { 
                title: "HTML Basics", 
                details: "Learn the fundamental structure of web pages, including semantic tags, forms, and accessibility.", 
                resources: [{ type: "video", label: "HTML Full Course", url: "https://www.youtube.com/watch?v=kUMe1FH4CHE" }],
                task: "Build a simple personal portfolio page using only HTML. Include a header, a section about yourself, a list of projects (can be placeholders), and a basic contact form.",
                questions: [
                    "What is the purpose of semantic HTML tags like `<header>`, `<footer>`, and `<article>`?",
                    "Describe the difference between `<div>` and `<span>`.",
                    "What are the essential attributes for an `<input>` tag within a form?"
                ]
            },
            { 
                title: "CSS Basics", 
                details: "Understand how to style web pages, covering selectors, properties, the box model, and basic responsive design.", 
                resources: [{ type: "video", label: "CSS for Beginners", url: "https://www.youtube.com/watch?v=Edsxf_NB4ug" }],
                task: "Style the personal portfolio page you created. Add colors, fonts, and spacing. Use the box model to align elements and ensure it looks good on both desktop and mobile screens using media queries.",
                questions: [
                    "Explain the CSS box model (margin, border, padding, content).",
                    "What is the difference between a class selector and an ID selector in CSS?",
                    "How do you use a media query to apply styles only for screens smaller than 600px?"
                ]
            },
        ],
        "Weeks 3-5: Advanced CSS & DOM": [
            { 
                title: "The Document Object Model (DOM)", 
                details: "A deep dive into what the DOM is and its relationship with HTML and JavaScript.", 
                resources: [{ type: "video", label: "What is the DOM?", url: "https://www.youtube.com/watch?v=H21jgfF-3A8" }, { type: "article", label: "DOM Explained", url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction" }],
                task: "Create a simple webpage with a button. Using the browser's developer console, write JavaScript to select the button and change its text when clicked.",
                questions: [
                    "What is the DOM and how does it relate to your HTML file?",
                    "What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector`?",
                ]
            },
            { 
                title: "Flexbox & CSS Grid", 
                details: "Master modern CSS layout modules for creating complex responsive structures.", 
                resources: [{ type: "video", label: "Flexbox & Grid Course", url: "https://www.youtube.com/watch?v=Rz-h_g_8g_Y" }, { type: "exercise", label: "Flexbox Froggy", url: "https://flexboxfroggy.com/" }, { type: "exercise", label: "Grid Garden", url: "https://cssgridgarden.com/" }],
                task: "Rebuild the layout of your portfolio page using Flexbox for component alignment (like navigation bars) and CSS Grid for the main page structure (like a project gallery).",
                questions: [
                    "When would you choose to use Flexbox over CSS Grid, and vice-versa?",
                    "What is the difference between `justify-content` and `align-items` in Flexbox?",
                    "How do you create a three-column responsive grid using CSS Grid?",
                ]
            },
        ],
        "Weeks 6-12: JavaScript Fundamentals & Advanced": [
            { 
                title: "JavaScript Basics", 
                details: "Covering variables, data types, operators, control flow, functions, objects, and arrays. Includes problem-solving exercises.", 
                resources: [{ type: "exercise", label: "JS Basics Problems", url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" }, { type: "article", label: "Array Methods", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" }],
                task: "Create a simple 'To-Do List' application. Users should be able to add items to a list, and click on items to mark them as complete (e.g., by adding a line-through style).",
                questions: [
                    "Explain the difference between `let`, `const`, and `var`.",
                    "What is the difference between `==` and `===` in JavaScript?",
                    "How does the `.map()` array method work? Provide an example.",
                ]
            },
            { 
                title: "Asynchronous JavaScript", 
                details: "Learn about API calls, Promises, and async/await for handling asynchronous operations.", 
                resources: [{ type: "video", label: "Async JS Explained", url: "https://www.youtube.com/watch?v=ZYb_gwLdKZw" }],
                task: "Use the Fetch API to get data from a public API (e.g., the JSONPlaceholder API) and display the results on your webpage. Handle loading and error states.",
                questions: [
                    "What is a Promise in JavaScript?",
                    "Explain the difference between `.then()` and `async/await` syntax.",
                    "What is the purpose of the `try...catch` block when using `async/await`?",
                ]
            },
        ],
        "Weeks 13-20: React.js Deep Dive": [
            { 
                title: "React Fundamentals", 
                details: "Learn the most popular JavaScript library for UI. Covering components, state, props, hooks, and the virtual DOM.", 
                resources: [{ type: "video", label: "React Full Course", url: "https://www.youtube.com/watch?v=SqcY0GlETPk" }],
                task: "Rebuild your 'To-Do List' application using React. Manage the list of to-dos in the component's state. Break the UI down into components like `TodoList`, `TodoItem`, and `AddTodoForm`.",
                 questions: [
                    "What is JSX?",
                    "Explain the concept of 'state' and 'props' in React.",
                    "What is the purpose of the `useEffect` hook?",
                ]
            },
            { 
                title: "State Management", 
                details: "Understand advanced state management concepts and libraries like Redux or Zustand.", 
                resources: [{ type: "video", label: "React State Management", url: "https://www.youtube.com/watch?v=F6W5Pz_S4Jc" }],
                task: "Build a simple shopping cart application. Use a state management library to manage the cart's state globally, allowing different components to add items to the cart and display the total.",
                questions: [
                    "Why would you need a global state management library instead of just using component state?",
                    "What is the difference between client-side state and server-side state?",
                ]
            },
        ],
        "Weeks 21-24: Final Project & Career Prep": [
            { 
                title: "Capstone Project", 
                details: "Build a complete, real-world application from a selection of projects like an E-commerce Store or Recipe Finder.", 
                resources: [{ type: "project", label: "Choose Your Final Project", url: "https://github.com/florinpop17/app-ideas" }],
                task: "Choose a project from the provided list and build it from scratch using Next.js/React. Deploy the final application to a hosting service like Vercel or Netlify.",
                questions: [
                    "What were the biggest challenges you faced in your capstone project and how did you overcome them?",
                    "How did you structure your components and state for this large project?",
                ]
            },
            { 
                title: "Career Preparation", 
                details: "Finalize your portfolio, set up your CV with project links, optimize your LinkedIn profile, and prepare for interviews.", 
                resources: [{ type: "action", label: "CV & LinkedIn Setup", url: "#" }],
                task: "Create a professional CV, update your LinkedIn to showcase your new skills and projects, and practice common frontend interview questions.",
                questions: [
                    "How would you explain your final project to a non-technical recruiter?",
                    "What are your career goals for the next 1-2 years as a frontend developer?",
                ]
            },
        ],
    },
    backend: {
        "Weeks 1-4: Programming & Database Fundamentals": [
            { 
                title: "Python/Node.js Basics", 
                details: "Choose a language and master its core concepts, including syntax, data structures, and control flow.", 
                resources: [{ type: "video", label: "Python for Beginners", url: "https://www.youtube.com/watch?v=eWRfhZUzrAc" }, { type: "video", label: "Node.js Full Course", url: "https://www.youtube.com/watch?v=f2EqECiTBL8" }],
                task: "Write a command-line script that can read and write data to a local text file, for example, a simple note-taking application.",
                questions: [
                    "What are the main data types in your chosen language?",
                    "Explain the concept of a 'module' or 'package' in your language's ecosystem.",
                ]
            },
            { 
                title: "SQL & Relational Databases", 
                details: "Learn SQL fundamentals and how to design and interact with databases like PostgreSQL or MySQL.", 
                resources: [{ type: "video", label: "SQL in 60 Minutes", url: "https://www.youtube.com/watch?v=p3qvj9hO_Bo" }, { type: "exercise", label: "SQLBolt", url: "https://sqlbolt.com/" }],
                task: "Design a simple database schema for a blog (with tables for users, posts, and comments). Write SQL queries to create these tables, insert data, and retrieve all posts by a specific user.",
                questions: [
                    "What is a primary key and a foreign key?",
                    "Explain the difference between an INNER JOIN and a LEFT JOIN.",
                    "What is database normalization?",
                ]
            },
        ],
        "Weeks 5-10: API Development": [
            { 
                title: "Building RESTful APIs", 
                details: "Learn the principles of REST and build your first API using a framework like Express (Node.js) or FastAPI (Python).", 
                resources: [{ type: "video", label: "Build a REST API", url: "https://www.youtube.com/watch?v=pKd0Rpw7O48" }],
                task: "Build a REST API for the blog database you designed. Create endpoints to GET all posts, GET a single post by ID, CREATE a new post, UPDATE a post, and DELETE a post.",
                questions: [
                    "What are the main HTTP methods and what do they represent?",
                    "What is a status code, and what do 200, 201, 404, and 500 mean?",
                    "What is the difference between `PUT` and `PATCH`?",
                ]
            },
            { 
                title: "Authentication & Authorization", 
                details: "Implement secure user authentication using JWT, OAuth, and sessions.", 
                resources: [{ type: "article", label: "The JWT Handbook", url: "https://jwt.io/introduction" }],
                task: "Add authentication to your blog API. Create endpoints for user registration and login. Protect the CREATE, UPDATE, and DELETE endpoints so that only the authenticated user who created the post can modify it.",
                questions: [
                    "What is a JSON Web Token (JWT) and how does it work?",
                    "What is the difference between authentication and authorization?",
                    "Why is it important to hash passwords before storing them in a database?",
                ]
            },
        ],
        "Weeks 11-18: DevOps & Cloud Infrastructure": [
            { 
                title: "Git & Version Control", 
                details: "Master Git for collaboration, branching, and managing code history.", 
                resources: [{ type: "exercise", label: "Learn Git Branching", url: "https://learngitbranching.js.org/" }],
                task: "Create a new repository for your API project on GitHub. Use a feature-branch workflow: create a new branch for a new feature (e.g., adding comments), commit your changes, and then create a pull request to merge it back into the main branch.",
                questions: [
                    "What is the difference between `git fetch` and `git pull`?",
                    "Explain the concept of a pull request (or merge request).",
                ]
            },
            { 
                title: "Containerization with Docker", 
                details: "Learn to package and run your applications in isolated containers using Docker.", 
                resources: [{ type: "video", label: "Docker for Beginners", url: "https://www.youtube.com/watch?v=3c-iBn73dDE" }],
                task: "Write a Dockerfile for your blog API. Build a Docker image and run it as a container. Then, write a `docker-compose.yml` file to run both your API and your PostgreSQL database together.",
                questions: [
                    "What problem does Docker solve?",
                    "What is the difference between a Docker image and a Docker container?",
                    "What is the purpose of `docker-compose`?",
                ]
            },
        ],
        "Weeks 19-24: Final Project & System Design": [
            { 
                title: "System Design Basics", 
                details: "Learn the fundamentals of designing scalable, reliable, and maintainable backend systems.", 
                resources: [{ type: "article", label: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer" }],
                task: "Design the high-level architecture for a URL shortening service like Bitly. Think about the API endpoints, database schema, and how you would handle scaling to millions of users.",
                questions: [
                    "What is a load balancer and why is it useful?",
                    "Explain the concept of database sharding.",
                    "What are the trade-offs between monolithic and microservices architectures?",
                ]
            },
            { 
                title: "Capstone Project", 
                details: "Build a complete backend for a real-world application, such as a social media clone or a booking system.", 
                resources: [{ type: "project", label: "Choose Your Final Project", url: "https://github.com/florinpop17/app-ideas" }],
                task: "Choose a project and build the complete backend API for it. It should include a database, authentication, and be fully containerized with Docker. Deploy the final application to a cloud provider like AWS or Google Cloud.",
                questions: [
                    "What were the most difficult design decisions you had to make in your project?",
                    "How would your architecture change if you needed to support 10x more users?",
                ]
            },
        ],
    },
    uiux: {
        "Weeks 1-4: Design Foundations & User Research": [
            { 
                title: "Figma Fundamentals", 
                details: "Master the industry-standard design tool, from basic shapes to auto layout and components.", 
                resources: [{ type: "video", label: "Figma for Beginners", url: "https://www.youtube.com/watch?v=jwN_tdY4_2s" }],
                task: "Recreate the user interface of your favorite mobile app's login screen in Figma. Focus on matching the layout, colors, and typography.",
                questions: [
                    "What is 'auto layout' in Figma and what problem does it solve?",
                    "What is the purpose of creating 'components' in your design file?",
                ]
            },
            { 
                title: "User Research & Personas", 
                details: "Learn how to conduct user interviews, surveys, and create user personas to guide your design decisions.", 
                resources: [{ type: "article", label: "Guide to User Research", url: "https://maze.co/guides/user-research/" }],
                task: "Define a target audience for a hypothetical coffee ordering app. Write a short survey to understand their needs and create one user persona based on your imagined findings.",
                questions: [
                    "What is the difference between qualitative and quantitative research?",
                    "Why are user personas a valuable tool in the design process?",
                ]
            },
        ],
        "Weeks 5-10: Wireframing, Prototyping & UI Design": [
            { 
                title: "Wireframing & Prototyping", 
                details: "Create low-fidelity wireframes and build interactive prototypes in Figma.", 
                resources: [{ type: "video", label: "Prototyping in Figma", url: "https://www.youtube.com/watch?v=dEzuS9v22T4" }],
                task: "Create a low-fidelity wireframe for the main screens of your coffee ordering app (e.g., browsing menu, customizing a drink, checkout). Then, link them together into a clickable prototype in Figma.",
                questions: [
                    "What is the purpose of wireframing before moving to high-fidelity visual design?",
                    "What is a user flow?",
                ]
            },
            { 
                title: "Visual Design Principles", 
                details: "Study color theory, typography, and composition to create beautiful and effective user interfaces.", 
                resources: [{ type: "exercise", label: "Color Theory Challenge", url: "https://color.method.ac/" }],
                task: "Create a style guide for your coffee app. Choose a color palette, select typography, and define spacing and button styles. Apply this style guide to your wireframes to create a high-fidelity design.",
                questions: [
                    "What is the 60-30-10 rule in color design?",
                    "Why is visual hierarchy important in UI design?",
                ]
            },
        ],
        "Weeks 11-18: Design Systems & User Testing": [
            { 
                title: "Building a Design System", 
                details: "Learn to create a library of reusable components to ensure consistency and speed up your workflow.", 
                resources: [{ type: "video", label: "Intro to Design Systems", url: "https://www.youtube.com/watch?v=_Zt_if_a-28" }],
                task: "Create a basic design system in Figma for your coffee app. It should include color styles, text styles, and reusable components for buttons, input fields, and cards.",
                questions: [
                    "What are the benefits of using a design system?",
                    "What is the difference between a component and an instance in Figma?",
                ]
            },
            { 
                title: "Usability Testing", 
                details: "Plan and conduct usability tests to get feedback on your designs and identify areas for improvement.", 
                resources: [{ type: "article", label: "How to Conduct a Usability Test", url: "https://www.nngroup.com/articles/usability-testing-101/" }],
                task: "Write a usability test plan for your coffee app prototype. Ask a friend or family member to complete a task (e.g., 'Order a large latte with oat milk') and observe where they struggle.",
                questions: [
                    "What is a common mistake to avoid when conducting a usability test?",
                    "What kind of insights can you gain from a usability test?",
                ]
            },
        ],
        "Weeks 19-24: Portfolio & Final Project": [
            { 
                title: "Portfolio Development", 
                details: "Create a professional design portfolio that showcases your skills and projects.", 
                resources: [{ type: "article", label: "Building a UX Portfolio", url: "https://uxdesign.cc/how-to-build-a-ux-portfolio-64A1901B6191" }],
                task: "Create a portfolio case study for your coffee app project. Describe the problem, your process (research, wireframing, testing), and show your final designs.",
                questions: [
                    "What are the most important things to include in a portfolio case study?",
                    "How do you tell a compelling story about your design process?",
                ]
            },
            { 
                title: "Capstone Project", 
                details: "Design a complete mobile or web application from scratch, covering the entire design process from research to a high-fidelity prototype.", 
                resources: [{ type: "project", label: "Choose Your Final Project", url: "https://github.com/florinpop17/app-ideas" }],
                task: "Choose a new app idea and take it through the entire design process: research, personas, wireframing, prototyping, high-fidelity design, and usability testing. Create a second, comprehensive case study for your portfolio.",
                questions: [
                    "How did you apply feedback from usability testing to improve your final design?",
                    "What would you do differently if you were to start this project over again?",
                ]
            },
        ],
    },
    seo: {
        "Weeks 1-4: SEO Fundamentals": [
            { 
                title: "How Search Engines Work", 
                details: "Understand the basics of crawling, indexing, and ranking.", 
                resources: [{ type: "video", label: "Google Search Explained", url: "https://www.youtube.com/watch?v=0eKVizvYSUQ" }],
                task: "Perform a Google search for a topic you are interested in. Analyze the top 3 results and identify why you think Google ranked them highly (e.g., content quality, backlinks, site authority).",
                questions: [
                    "What is the difference between crawling and indexing?",
                    "What is a search engine results page (SERP)?",
                ]
            },
            { 
                title: "Keyword Research", 
                details: "Learn how to find and analyze keywords that your target audience is searching for.", 
                resources: [{ type: "article", label: "Ahrefs' Keyword Research Guide", url: "https://ahrefs.com/blog/keyword-research/" }],
                task: "Choose a niche (e.g., 'vegan baking'). Use a free keyword research tool (like Ubersuggest or Google Keyword Planner) to find 10 relevant keywords. Analyze their search volume and difficulty.",
                questions: [
                    "What is the difference between a short-tail and a long-tail keyword?",
                    "What is 'search intent' and why is it important?",
                ]
            },
        ],
        "Weeks 5-10: Technical & Off-Page SEO": [
            { 
                title: "On-Page SEO", 
                details: "Master title tags, meta descriptions, header tags, and content optimization.", 
                resources: [{ type: "video", label: "On-Page SEO Tutorial", url: "https://www.youtube.com/watch?v=gDYyAAdtDgo" }],
                task: "Write a short blog post (300-500 words) about one of the keywords you found. Ensure you have a compelling title tag, a meta description, and use your target keyword naturally in the content and headers.",
                 questions: [
                    "What is the ideal length for a title tag?",
                    "Why are header tags (H1, H2, H3) important for SEO?",
                ]
            },
            { 
                title: "Technical SEO", 
                details: "Dive into sitemaps, robots.txt, schema markup, site speed, and mobile-friendliness.", 
                resources: [{ type: "article", label: "SEMRush Technical SEO Guide", url: "https://www.semrush.com/blog/technical-seo-guide/" }],
                task: "Use Google's PageSpeed Insights to analyze the performance of your favorite website. Identify the main issues affecting its speed and mobile-friendliness.",
                questions: [
                    "What is the purpose of a `robots.txt` file?",
                    "What is schema markup and how does it help SEO?",
                ]
            },
        ],
        "Weeks 11-18: Analytics & Content Strategy": [
            { 
                title: "Link Building", 
                details: "Understand the importance of backlinks and learn strategies for acquiring high-quality links.", 
                resources: [{ type: "video", label: "Link Building for Beginners", url: "https://www.youtube.com/watch?v=5tRQ3y_5O_I" }],
                task: "Find a broken link on a reputable website in your chosen niche. Write a brief outreach email to the site owner, letting them know about the broken link and suggesting your blog post as a potential replacement.",
                questions: [
                    "What makes a backlink 'high-quality'?",
                    "What is the difference between 'dofollow' and 'nofollow' links?",
                ]
            },
            { 
                title: "Google Analytics 4", 
                details: "Learn how to set up, navigate, and interpret data in GA4 to track your SEO performance.", 
                resources: [{ type: "video", label: "GA4 for Beginners", url: "https://www.youtube.com/watch?v=uC0a_w0YvM4" }],
                task: "If you have a personal website, set up a Google Analytics 4 property. Explore the reports to find out how many users you had in the last 7 days and where they came from (e.g., Organic Search, Direct).",
                questions: [
                    "What is the difference between a 'user' and a 'session' in Google Analytics?",
                    "What is 'bounce rate' and what can it tell you about your page?",
                ]
            },
        ],
        "Weeks 19-24: Final Project & Reporting": [
            { 
                title: "SEO Audit", 
                details: "Learn how to conduct a comprehensive SEO audit for a real website.", 
                resources: [{ type: "project", label: "Perform an SEO Audit", url: "https://backlinko.com/seo-audit" }],
                task: "Perform a basic SEO audit on a small local business's website. Create a short report outlining 3-5 key areas for improvement, covering on-page, technical, and off-page factors.",
                questions: [
                    "What are the main components of a technical SEO audit?",
                    "How do you prioritize the recommendations from your audit?",
                ]
            },
             { 
                title: "App Store Optimization (ASO)", 
                details: "Learn the fundamentals of optimizing app listings on the Apple App Store and Google Play Store.", 
                resources: [{ type: "video", label: "ASO Explained", url: "https://www.youtube.com/watch?v=x_4DFpCjHAs" }],
                task: "Analyze the app store listing for a popular app. Evaluate its title, subtitle, description, and screenshots. Identify what it does well and where it could be improved.",
                questions: [
                    "What are the most important ranking factors in ASO?",
                    "How is ASO different from traditional web SEO?",
                ]
            },
        ],
    },
    reactNative: {
        "Weeks 1-4: Foundations & Core Concepts": [
            { 
                title: "React & JavaScript Refresher", 
                details: "Revisit core React concepts like JSX, components, state, props, and hooks. Solidify modern JavaScript (ES6+) knowledge.", 
                resources: [{ type: "video", label: "React Official Tutorial", url: "https://react.dev/learn" }, { type: "article", label: "JavaScript.info", url: "https://javascript.info/" }],
                task: "Create a simple web-based counter application using React that has buttons to increment, decrement, and reset the count. This will refresh your state management skills.",
                questions: [
                    "What is the difference between state and props?",
                    "Explain the purpose of the `useState` and `useEffect` hooks.",
                    "What is JSX and how is it different from HTML?"
                ]
            },
            { 
                title: "Intro to React Native & Expo", 
                details: "Set up your development environment with Expo. Learn about core components like `View`, `Text`, `Image`, `StyleSheet`, and the basic project structure.", 
                resources: [{ type: "video", label: "React Native Full Course", url: "https://www.youtube.com/watch?v=0-S5a0eXPoc" }],
                task: "Create a new React Native project using Expo. Build a simple 'Welcome' screen with a logo, a title, and a short paragraph of text, using the core components.",
                questions: [
                    "What is the difference between React and React Native?",
                    "What role does Expo play in React Native development?",
                    "How does styling in React Native differ from styling for the web with CSS?"
                ]
            },
        ],
        "Weeks 5-10: Building UIs & Navigation": [
            { 
                title: "Layout with Flexbox", 
                details: "Master Flexbox for building responsive layouts in React Native. Understand concepts like `flexDirection`, `justifyContent`, and `alignItems`.", 
                resources: [{ type: "exercise", label: "Flexbox Froggy", url: "https://flexboxfroggy.com/" }, { type: "article", label: "React Native Layout Guide", url: "https://reactnative.dev/docs/flexbox" }],
                task: "Build a UI that mimics a social media profile screen. It should have a profile picture at the top, followed by user stats (posts, followers, following) in a row, and a grid of photos below.",
                questions: [
                    "What is the default `flexDirection` in React Native?",
                    "How do you center an item both horizontally and vertically inside a container?",
                    "What is the difference between `justifyContent` and `alignItems`?",
                ]
            },
            { 
                title: "Handling User Input & Lists", 
                details: "Learn to use `TextInput` for forms, `Button` and `TouchableOpacity` for actions, and `ScrollView`/`FlatList` for displaying long lists of data.", 
                resources: [{ type: "video", label: "React Native Lists", url: "https://www.youtube.com/watch?v=zQc_i2_2aM0" }],
                task: "Build a basic search screen. Include a `TextInput` for the user to type a query, a `Button` to submit, and display the results in a scrollable `FlatList`.",
                questions: [
                    "Why is `FlatList` more performant than `ScrollView` for long lists?",
                    "What is the purpose of the `onPress` prop on a `Button`?",
                    "How do you manage the value of a `TextInput` component?",
                ]
            },
        ],
        "Weeks 11-18: Navigation & Device APIs": [
            { 
                title: "Navigation with React Navigation", 
                details: "Implement navigation between screens using the most popular library, React Navigation. Learn about Stack, Tab, and Drawer navigators.", 
                resources: [{ type: "article", label: "React Navigation Docs", url: "https://reactnavigation.org/docs/getting-started/" }],
                task: "Create a multi-screen app. The first screen should have a button that navigates to a second, 'Details' screen. Then, implement a tab navigator to switch between a 'Home' screen and a 'Settings' screen.",
                questions: [
                    "What is the difference between a Stack navigator and a Tab navigator?",
                    "How do you pass data from one screen to another using React Navigation?",
                    "What is a navigation stack?",
                ]
            },
            { 
                title: "Accessing Native Device APIs", 
                details: "Learn to use native device features like the Camera, Photo Library, and AsyncStorage for local storage using Expo's rich set of APIs.", 
                resources: [{ type: "video", label: "Expo Camera & Image Picker", url: "https://www.youtube.com/watch?v=Cn9b_T0M8aA" }],
                task: "Build a feature where a user can press a button to open the device's camera, take a photo, and then display that photo on the screen.",
                questions: [
                    "Why do you need to ask for permissions before using APIs like the Camera or Location?",
                    "What is `AsyncStorage` used for?",
                    "What is the purpose of the `expo-image-picker` library?",
                ]
            },
        ],
        "Weeks 19-24: State, Data & Deployment": [
            { 
                title: "Advanced State & Data Management", 
                details: "Manage global app state with Zustand or Redux Toolkit. Fetch data from remote APIs using `fetch` or Axios and handle loading/error states.", 
                resources: [{ type: "article", label: "Zustand State Management", url: "https://docs.pmnd.rs/zustand/getting-started/introduction" }],
                task: "Create an app that fetches a list of users from a public API (like JSONPlaceholder). Store the user list in a global Zustand store. Display the list on one screen, and on a separate 'Profile' screen, display the details of a selected user from the global store.",
                questions: [
                    "When should you use global state instead of local component state?",
                    "How do you handle API loading and error states in your UI?",
                    "What is the purpose of the `useEffect` hook when fetching data?",
                ]
            },
            { 
                title: "Final Project & Publishing", 
                details: "Build a complete, multi-screen app from scratch. Learn how to create a build of your app and submit it to the Apple App Store and Google Play Store using Expo Application Services (EAS).", 
                resources: [{ type: "project", label: "Choose Your Final Project", url: "https://github.com/florinpop17/app-ideas" }, { type: "article", label: "EAS Build Guide", url: "https://docs.expo.dev/build/introduction/" }],
                task: "Build a complete weather app that uses the device's location to fetch and display the current weather from a free weather API. Then, use EAS Build to create an `apk` (Android) or `ipa` (iOS) file ready for submission.",
                questions: [
                    "What is EAS (Expo Application Services)?",
                    "What are the main steps involved in publishing an app to the app stores?",
                    "What is the difference between a development build and a production build?",
                ]
            },
        ],
    },
    devops: {
        "Weeks 1-4: Foundations of DevOps & Git": [
            {
                title: "DevOps Culture & Principles",
                details: "Understand the 'Why' behind DevOps. Learn about CAMS (Culture, Automation, Measurement, Sharing) and the philosophy of breaking down silos.",
                resources: [{ type: "video", label: "What is DevOps?", url: "https://www.youtube.com/watch?v=J_Q3g_g2iTw" }, { type: "article", label: "The Phoenix Project (Book)", url: "https://www.amazon.com/Phoenix-Project-DevOps-Helping-Business/dp/0988262592" }],
                task: "Write a one-page summary explaining how a traditional 'waterfall' development process differs from a DevOps approach, focusing on the feedback loop and deployment frequency.",
                questions: [
                    "What problem is DevOps trying to solve?",
                    "What are the three ways of DevOps?",
                    "What does 'shifting left' mean in a DevOps context?",
                ],
            },
            {
                title: "Mastering Git & Version Control",
                details: "Go beyond `git add/commit/push`. Master branching strategies (GitFlow), handling merge conflicts, and using Git for effective team collaboration.",
                resources: [{ type: "exercise", label: "Learn Git Branching", url: "https://learngitbranching.js.org/" }],
                task: "Create a repository on GitHub. Create a `develop` branch from `main`. Create a new feature branch from `develop`, make a change, and commit it. Open a Pull Request to merge the feature into `develop`.",
                questions: [
                    "What is the difference between `git merge` and `git rebase`?",
                    "What is a Pull Request (or Merge Request)?",
                    "What is the purpose of a `.gitignore` file?",
                ],
            },
        ],
        "Weeks 5-10: CI/CD Pipelines": [
            {
                title: "Continuous Integration with GitHub Actions",
                details: "Learn to build your first CI pipeline. Automate the process of building, testing, and linting your code every time a change is pushed.",
                resources: [{ type: "video", label: "GitHub Actions Tutorial", url: "https://www.youtube.com/watch?v=R8_veQiY-9s" }],
                task: "Take a simple Node.js application. Create a GitHub Actions workflow file (`.github/workflows/ci.yml`) that triggers on every push. The workflow should install dependencies, run linting, and execute unit tests.",
                questions: [
                    "What is Continuous Integration (CI)?",
                    "What is a 'workflow' in the context of GitHub Actions?",
                    "Why is it important to run tests automatically in a CI pipeline?",
                ],
            },
            {
                title: "Continuous Delivery/Deployment",
                details: "Extend your CI pipeline to a CD pipeline. Learn to automatically deploy your application to a staging or production environment after tests pass.",
                resources: [{ type: "article", label: "Continuous Delivery Guide", url: "https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment" }],
                task: "Create a second job in your GitHub Actions workflow that deploys your application to a free hosting service (like Vercel or Netlify) but only when changes are merged into the `main` branch.",
                questions: [
                    "What is the difference between Continuous Delivery and Continuous Deployment?",
                    "What is a 'deployment environment' (e.g., staging, production)?",
                    "Why are feature flags a useful technique in CD?",
                ],
            },
        ],
        "Weeks 11-18: Containerization & Cloud": [
            {
                title: "Containerization with Docker",
                details: "Learn to package applications and their dependencies into portable containers using Docker. Write Dockerfiles and manage multiple containers with Docker Compose.",
                resources: [{ type: "video", label: "Docker Full Course", url: "https://www.youtube.com/watch?v=3c-iBn73dDE" }],
                task: "Write a Dockerfile for the Node.js application. Build an image from it and run it as a container. Then, create a `docker-compose.yml` file to run the app container and a database container (e.g., Postgres) together.",
                questions: [
                    "What problems does Docker solve?",
                    "What is the difference between a Docker image and a Docker container?",
                    "What is the purpose of Docker Compose?",
                ],
            },
            {
                title: "Cloud Fundamentals (AWS/GCP)",
                details: "Understand the core services of a major cloud provider: compute (EC2/Compute Engine), storage (S3/Cloud Storage), and networking (VPC).",
                resources: [{ type: "video", label: "AWS in 10 minutes", url: "https://www.youtube.com/watch?v=r4YIdn2eTm4" }],
                task: "Create a free-tier account on AWS or GCP. Manually launch a small virtual machine (EC2 or Compute Engine), connect to it via SSH, and install a simple web server like Nginx.",
                questions: [
                    "What is the difference between IaaS, PaaS, and SaaS?",
                    "What is a Virtual Private Cloud (VPC)?",
                    "What is object storage (like S3) used for?",
                ],
            },
        ],
        "Weeks 19-24: Infrastructure as Code & Final Project": [
            {
                title: "Infrastructure as Code (IaC) with Terraform",
                details: "Stop configuring infrastructure manually. Learn to define and manage your cloud resources using a declarative IaC tool like Terraform.",
                resources: [{ type: "article", label: "Terraform Tutorial", url: "https://developer.hashicorp.com/terraform/tutorials/aws-get-started" }],
                task: "Write a Terraform configuration file that automates the process from the previous week: it should define and create a VPC and a virtual machine on AWS or GCP when you run `terraform apply`.",
                questions: [
                    "Why is Infrastructure as Code important for DevOps?",
                    "What is 'declarative' configuration?",
                    "What is the 'state file' in Terraform and why is it important?",
                ],
            },
            {
                title: "Capstone Project: Fully Automated Pipeline",
                details: "Combine everything you've learned. Build a complete CI/CD pipeline that takes a containerized application, provisions the necessary cloud infrastructure using Terraform, and deploys the container to that infrastructure.",
                resources: [{ type: "project", label: "CI/CD Project Ideas", url: "https://github.com/bregman-arie/devops-exercises" }],
                task: "Take your containerized Node.js app. Create a GitHub Actions pipeline that, on a push to `main`, uses Terraform to ensure the cloud infrastructure is up-to-date and then deploys the latest Docker image to the server.",
                questions: [
                    "How did you manage sensitive information (like API keys or cloud credentials) in your pipeline?",
                    "What was the most challenging part of connecting all the different tools (Git, Docker, Terraform, Cloud)?",
                    "How would you add monitoring and alerting to your deployed application?",
                ],
            },
        ],
    }
};

const getResourceIcon = (type: string) => {
    switch (type) {
        case "video": return <PlayCircle className="h-5 w-5 text-muted-foreground"/>;
        case "article": return <Projector className="h-5 w-5 text-muted-foreground"/>;
        case "exercise": return <Lightbulb className="h-5 w-5 text-muted-foreground"/>;
        case "project": return <GitBranch className="h-5 w-5 text-muted-foreground"/>;
        default: return <CheckCircle className="h-5 w-5 text-muted-foreground"/>;
    }
}

const TrainingCurriculum = ({ curriculum }: { curriculum: typeof curriculums.frontend }) => (
    <Accordion type="single" collapsible className="w-full">
        {Object.entries(curriculum).map(([week, topics]) => (
            <AccordionItem key={week} value={week}>
                <AccordionTrigger className="text-xl font-headline hover:no-underline text-left">{week}</AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                    {topics.map(topic => (
                        <Card key={topic.title} className="bg-background/50">
                            <CardHeader>
                                <CardTitle className="text-lg">{topic.title}</CardTitle>
                                <CardDescription>{topic.details}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <h4 className="text-sm font-semibold mb-3 text-muted-foreground">Key Resources:</h4>
                                <div className="flex flex-wrap gap-x-6 gap-y-3">
                                    {topic.resources.map(res => (
                                        <a key={res.label} href={res.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary hover:underline">
                                            {getResourceIcon(res.type)}
                                            <span>{res.label}</span>
                                            <ExternalLink className="h-4 w-4" />
                                        </a>
                                    ))}
                                </div>
                            </CardContent>
                             <CardFooter className="flex-col items-start gap-4 bg-secondary/30 p-6 pt-4">
                                <div className="w-full">
                                    <h4 className="font-semibold text-foreground flex items-center gap-2 mb-2"><ClipboardCheck className="h-5 w-5 text-primary" />Your Task</h4>
                                    <p className="text-sm text-foreground/80">{topic.task}</p>
                                </div>
                                <div className="w-full">
                                    <h4 className="font-semibold text-foreground flex items-center gap-2 mb-2"><HelpCircle className="h-5 w-5 text-primary" />Knowledge Check</h4>
                                    <ul className="list-disc list-inside space-y-1 text-sm text-foreground/80">
                                        {topic.questions.map((q, i) => <li key={i}>{q}</li>)}
                                    </ul>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </AccordionContent>
            </AccordionItem>
        ))}
    </Accordion>
);


export default function TrainingProgramPage() {
    return (
        <>
            <section className="w-full pt-24 md:pt-36 lg:pt-40 bg-secondary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="px-8 md:px-12 z-10 relative text-center">
                    <FadeIn className="space-y-6">
                        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
                           TechNext Professional Training Programs
                        </h1>
                        <p className="max-w-3xl mx-auto text-foreground/80 md:text-xl">
                            Comprehensive, project-based training designed to take you from beginner to job-ready. Choose your path and master the skills needed to succeed in the tech industry.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Button size="lg" className="text-lg px-8 py-6" asChild>
                                <Link href="#curriculum">Explore Programs</Link>
                            </Button>
                             <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                                <Link href="mailto:technext96@gmail.com?subject=Inquiry about Training Programs">Enroll Now</Link>
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section id="curriculum" className="w-full py-16 md:py-24">
                <div className="px-8 md:px-12">
                     <FadeIn className="text-center space-y-3 mb-12 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-headline font-bold">Choose Your Career Path</h2>
                        <p className="text-foreground/80 md:text-lg">
                           We offer specialized, 6-month roadmaps for the most in-demand roles in the tech industry. Each program is structured to provide deep practical knowledge and a portfolio of real-world projects.
                        </p>
                    </FadeIn>
                    <FadeIn className="max-w-6xl mx-auto">
                        <Tabs defaultValue="frontend" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto">
                                <TabsTrigger value="frontend" className="py-3 flex flex-col sm:flex-row items-center justify-center gap-2 h-full"><Code/>Frontend</TabsTrigger>
                                <TabsTrigger value="backend" className="py-3 flex flex-col sm:flex-row items-center justify-center gap-2 h-full"><Server/>Backend</TabsTrigger>
                                <TabsTrigger value="reactNative" className="py-3 flex flex-col sm:flex-row items-center justify-center gap-2 h-full"><Smartphone/>React Native</TabsTrigger>
                                <TabsTrigger value="devops" className="py-3 flex flex-col sm:flex-row items-center justify-center gap-2 h-full"><GitBranch/>DevOps</TabsTrigger>
                                <TabsTrigger value="uiux" className="py-3 flex flex-col sm:flex-row items-center justify-center gap-2 h-full"><Palette/>UI/UX</TabsTrigger>
                                <TabsTrigger value="seo" className="py-3 flex flex-col sm:flex-row items-center justify-center gap-2 h-full"><Search/>SEO & ASO</TabsTrigger>
                            </TabsList>
                            <TabsContent value="frontend" className="pt-8">
                                <TrainingCurriculum curriculum={curriculums.frontend} />
                            </TabsContent>
                            <TabsContent value="backend" className="pt-8">
                                <TrainingCurriculum curriculum={curriculums.backend} />
                            </TabsContent>
                             <TabsContent value="reactNative" className="pt-8">
                                <TrainingCurriculum curriculum={curriculums.reactNative as any} />
                            </TabsContent>
                             <TabsContent value="devops" className="pt-8">
                                <TrainingCurriculum curriculum={curriculums.devops as any} />
                            </TabsContent>
                            <TabsContent value="uiux" className="pt-8">
                                <TrainingCurriculum curriculum={curriculums.uiux} />
                            </TabsContent>
                            <TabsContent value="seo" className="pt-8">
                                <TrainingCurriculum curriculum={curriculums.seo} />
                            </TabsContent>
                        </Tabs>
                    </FadeIn>
                </div>
            </section>
            
            <section id="contact" className="w-full py-20 md:py-28 bg-secondary/20">
                <div className="px-8 md:px-12 text-center">
                   <FadeIn className="space-y-6 max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border-primary/10 rounded-lg p-10 glow-effect">
                     <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">Ready to Start Your Tech Journey?</h2>
                     <p className="text-foreground/80 md:text-lg">
                       This program is your comprehensive guide to a new career. If you're ready to commit and build your future, we're ready to guide you.
                     </p>
                      <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="text-lg px-8 py-6">
                           <Link href="mailto:technext96@gmail.com?subject=Enrollment Inquiry: Training Programs">
                                <Send className="mr-2 h-5 w-5"/>
                                Enroll via Email
                            </Link>
                        </Button>
                         <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
                           <Link href="https://wa.me/923491089456?text=Hi! I'm interested in the TechNext Training Programs.">
                                <MessageSquare className="mr-2 h-5 w-5"/>
                                Ask on WhatsApp
                            </Link>
                        </Button>
                      </div>
                  </FadeIn>
                </div>
            </section>
        </>
    );
}
