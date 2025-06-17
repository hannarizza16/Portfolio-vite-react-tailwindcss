import PokedexImage from "../../../assets/img/pokedex.png"
import RecipeGenerator from "../../../assets/img/recipeGenerator.png"
import JobApplicationLedgerLocalStorage from "../../../assets/img/jobAppLocalStorage.png"
import TodoList from "../../../assets/img/todoList.png"
import ElderlyCareNotesApp from "../../../assets/img/elderlycareapp.png"
const projects = [
    {
        id: 1,
        title: "Recipe Generator",
        description: `A recipe generator where you can generate a recipe by simply entering the name of a dish,
         and with the **chat with ai** section you can search for the meal you want eg. "Filipino breakfast" depending on what you crave for that day `,
        imageUrl: RecipeGenerator,
        techStack: ["JavaScript", "CSS", "GEMINI API"],
        link:"https://recipeaigenerator.netlify.app/"
    },
    {
        id: 2,
        title: "Job Application Ledger (Local Storage)",
        description: "A Simple Job Application Ledger where users can add, archive and delete to manage their Applications to different companies.",
        imageUrl: JobApplicationLedgerLocalStorage,
        techStack: ["React", "Tailwindcss", "Local Storage"],
        link:"https://job-application-ledger.netlify.app/"
    },
    {
        id: 3,
        title: "Job Application Ledger (MERN)",
        description: "A Job Application Ledger taht uses MongoDB as a database, where users can add, archive and delete to manage their Applications to different companies.",
        imageUrl: JobApplicationLedgerLocalStorage,
        techStack: ["React", "MongoDB", "Express", "Node.js"],
        link:"https://jobapplicationledger.netlify.app/"
    },
    {
        id: 4 ,
        title: "Todo List (MERN)",
        description: "A simple Todo List where you can add, edit, delete and mark your list as complete.",
        imageUrl: TodoList,
        techStack: ["React", "MongoDB", "Express", "Node.js"],

        link:"https://pokedex-mern.netlify.app/"
    },
    {
        id: 5,
        title: "Pokedex App",
        description: "A MERN app where users can add, edit, delete and upload image of a pokemon.",
        imageUrl: PokedexImage,
        techStack: ["React", "MongoDB", "Express", "Node.js", "Cloudinary"],
        link:"https://pokedex-mern.netlify.app/"
    },
    {
        id: 5,
        title: "Elderly Care Notes App",
        description: `The Elderly care app was a group project in our bootcamp wherein we collaborated and share ideas.
        Elderly Care Notes is an application that monitors the patient's medical record, health status, and appointments to Doctor. user can also set a reminder and communicate with families via chat inside the app.
        It's a all in all monitoring system that focuses the elderly patients`,
        imageUrl: ElderlyCareNotesApp,
        techStack: ["React", "MongoDB", "Express", "Node.js", "Cloudinary"],
        link:"https://elderly-care-notes.netlify.app/home"
    }

]

export default projects